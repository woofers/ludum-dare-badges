import get from './get'
import { ith, NA } from '../util/ith'
import range from '../util/range'
import { average, category } from '../util/format'

const cats = 8
const gradeKey = num => `grade-0${num}-result`
const averageKey = num => `grade-0${num}-average`
const categoryKey = num => `grade-0${num}`
const ratingsKey = num => categoryKey(num)

const url = (id, game) => `https://api.ldjam.com/vx/node2/walk/1/events/ludum-dare/${id}/${game}?node&parent`
const link = (id, game) => `https://ldjam.com/events/ludum-dare/${id}/${game}`

export const getData = (id, game) => {
  return new Promise((resolve, reject) => {
    get(url(id, game)).then(body => {
      const amount = body.node[0].grade
      const ratings = body.node[0].magic
      const categories = body.node[1].meta
      if (!categories || categories.length <= 0) return reject('Game not found')
      const stats = range(cats).map(i => ({
        index: i,
        category: categories[categoryKey(i)],
        grade: ratings[gradeKey(i)] || NA,
        average: ratings[averageKey(i)],
        rating: amount[ratingsKey(i)]
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
        average: average(stat),
        ith: ith(stat.grade)
      }))
      resolve({ ...data, stats })
    }).catch(err => reject(err))
  })
}
