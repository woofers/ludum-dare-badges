import get from './get'
import { ith, NA } from '../util/ith'
import range from '../util/range'
import { truncate, greaterThan } from '../util/truncate'
import { average, category } from '../util/format'

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

export const getData = (id, game) => {
  return new Promise((resolve, reject) => {
    if (isNaN(id)) {
      return reject({
        title: 'Invalid Ludum Dare #',
        message: `/${id}/ is not a valid Ludum Dare Jam #`
      })
    }
    get(url(id, game)).then(body => {
      const amount = body.node[0].grade
      const ratings = body.node[0].magic
      const categories = body.node[1].meta
      if (!categories || categories.length <= 0) {
        return reject({
          title:'Game not found',
          message:`${game} can not be found in for Jam #${id}`
        })
      }
      const stats = range(cats).map(i => ({
        index: i,
        category: categories[categoryKey(i)],
        grade: ratings[gradeKey(i)] || NA,
        average: ratings[averageKey(i)] || 0,
        rating: amount[ratingsKey(i)] || 0
      }))
      return resolve({ game: body.node[0].name, stats, link: link(id, game) })
    })
  })
}

export const svgData = (id, game) => {
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
