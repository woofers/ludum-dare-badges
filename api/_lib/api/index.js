import get from './get'
import { ith, NA } from '../util/ith'
import range from '../util/range'
import { truncate, greaterThan } from '../util/truncate'
import { average, category } from '../util/format'
import { convertToPng } from '../util/png'
import { large as template } from '../svg'
import results from '../models/results'
import sanitize from 'sanitize-html'

const MAX_NAME = 36
const MAX_GRADE = 999
const MAX_AVERAGE = 33

const cats = 8
const gradeKey = num => `grade-0${num}-result`
const averageKey = num => `grade-0${num}-average`
const categoryKey = num => `grade-0${num}`
const ratingsKey = num => categoryKey(num)

const url = (id, game) => `https://api.ldjam.com/vx/node2/walk/1/events/ludum-dare/${id}/${game}?node&parent`
const link = (id, game) => `https://ldjam.com/events/ludum-dare/${id}/${game}`

const notFound = (id, game) => {
  return {
    title:'Game not found',
    message:`${sanitize(game)} can not be found for Jam #${sanitize(id)}`
  }
}

export const getData = (id, game) => {
  return new Promise((resolve, reject) => {
    if (!id && !game) {
      return reject({
        title: 'Enter a Game',
        message: `Enter a Ludum Dare game`
      })
    }
    else if (isNaN(id)) {
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
      return resolve({ game: body.node[0].name, stats, link: link(id, game) })
    })
    .catch(err => {
      if (err.title) return reject(err)
      return reject(notFound(id, game))
    })
  })
}

const svgData = (id, game) => {
  return new Promise((resolve, reject) => {
    getData(id, game).then(data => {
      const stats = data.stats.map(stat => ({
        ...stat,
        category: category(stat),
        average: truncate(average(stat), MAX_AVERAGE),
        grade: greaterThan(stat.grade, MAX_GRADE),
        ith: ith(stat.grade)
      }))
      resolve({ ...data, game: truncate(data.game, MAX_NAME), stats })
    }).catch(err => reject(err))
  })
}

const type = (data, rasterize) => {
  return new Promise((resolve, reject) => {
    if (!rasterize) return resolve({ data, type: 'image/svg+xml' })
    convertToPng(data)
      .then(data => resolve({ data, type: 'image/svg+xml' }))
      .catch(err => reject(err))
  })
}

export default (id, game, res, rasterize) => {
  svgData(id, game)
    .catch(err => Promise.resolve(results(err.title, '', err.message)))
    .then(template)
    .then(data => type(data, rasterize))
    .then(img => {
      const maxAge = 4 * 60 * 60 * 1000
      res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=${maxAge}, max-age=${maxAge}`)
      res.setHeader('Content-Type', img.type)
      res.send(img.data)
    })
    .catch(err => res.send(err))
}
