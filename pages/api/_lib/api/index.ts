import get from './get'
import { ith, NA } from '../util/ith'
import range from '../util/range'
import { truncate, greaterThan } from '../util/truncate'
import { average, category } from '../util/format'
import { convertToPng } from '../util/png'
import minify from '../util/minify'
import { large as template } from '../svg'
import results, { type Result } from '../models/results'
import sanitize from 'sanitize-html'
import type { NextApiResponse } from 'next'

const MAX_NAME = 36
const MAX_GRADE = 999
const MAX_AVERAGE = 33

const cats = 8
const gradeKey = (num: number) => `grade-0${num}-result`
const averageKey = (num: number) => `grade-0${num}-average`
const categoryKey = (num: number) => `grade-0${num}`
const ratingsKey = (num: number) => categoryKey(num)

const url = (id: string, game: string) => `https://api.ldjam.com/vx/node2/walk/1/events/ludum-dare/${id}/${game}?node&parent`
const link = (id: string, game: string) => `https://ldjam.com/events/ludum-dare/${id}/${game}`

const notFound = (id: string, game: string) => {
  return {
    title:'Game not found',
    message:`${sanitize(game)} can not be found for Jam #${sanitize(id)}`
  }
}

export const getData = (id: string, game: string): Promise<Result> => {
  return new Promise((resolve, reject) => {
    if (!id && !game) {
      return reject({
        title: 'Enter a Game',
        message: `Enter a Ludum Dare game`
      })
    }
    else if (isNaN(parseInt(id))) {
      return reject({
        title: 'Invalid Ludum Dare #',
        message: `/${sanitize(id)}/ is not a valid Ludum Dare Jam #`
      })
    }
    get(url(id, game)).then(body => {
      if (body.status !== 200) return reject(notFound(id, game))
      const amount = body.node[0].grade
      const ratings = body.node[0].magic
      const categories = body.node[1].meta
      if (!categories || categories.length <= 0) return reject(notFound(id, game))
      const stats = range(cats).map(i => ({
        index: i,
        category: categories[categoryKey(i)],
        grade: ratings[gradeKey(i)] || NA,
        average: ratings[averageKey(i)] || 0,
        rating: amount[ratingsKey(i)] || 0
      }))
      return resolve({ game: body.node[0].name, stats, link: link(id, game) } as Result)
    })
    .catch(err => {
      if (err.title) return reject(err)
      return reject(notFound(id, game))
    })
  })
}

const svgData = async (id: string, game: string): Promise<Result> => {
  try {
    const data = await getData(id, game)
    const stats = data.stats.map(stat => ({
      ...stat,
      category: category(stat),
      average: truncate(average(stat), MAX_AVERAGE),
      grade: greaterThan(parseInt(stat.grade), MAX_GRADE),
      ith: ith(parseInt(stat.grade))
    }))
    return { ...data, game: truncate(data.game, MAX_NAME), stats }
  } catch (e) {
    throw e
  }
}

const type = async (data: string, rasterize: boolean) => {
  const func = rasterize ? convertToPng : minify
  const type = rasterize ? 'image/png' : 'image/svg+xml'
  try {
    const val = await func(data)
    return { data: val, type }
  } catch (e) {
    throw e
  }
}

export default (id: string, game: string, res: NextApiResponse, rasterize: boolean) => {
  svgData(id, game)
    .catch(err => Promise.resolve(results(err.title, '', err.message)))
    .then(it => template(it, rasterize))
    .then(data => type(data, rasterize))
    .then(img => {
      const maxAge = 4 * 60 * 60 * 1000
      res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=${maxAge}, max-age=${maxAge}`)
      res.setHeader('Content-Type', img.type)
      res.send(img.data)
    })
    .catch(err => res.send(err))
}

export { default as registerFonts } from './fonts'
