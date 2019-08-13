import range from '../util/range'

const cats = 8

export default (game, link, error) => {
  game = game || ''
  link = link || ''
  const stats = range(cats).map(i => ({
    index: i,
    category: '',
    grade: '',
    average: '',
    rating: '',
    ith: ''
  }))
  return { game, stats, link, error }
}
