import range from '../util/range'

const cats = 8

const makeStats = (game: string, link: string, error: string) => {
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

export type Result = ReturnType<typeof makeStats>

export default makeStats