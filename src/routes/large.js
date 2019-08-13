import { large as template } from '../svg'
import { svgData } from '../api'
import results from '../models/results'
import { convertToPng } from '../util/png'

const type = (data, rasterize) => {
  return new Promise((resolve, reject) => {
    if (!rasterize) return resolve({ data, type: 'image/svg+xml' })
    convertToPng(data)
      .then(data => resolve({ data, type: 'image/png' }))
      .catch(err => reject(err))
  })
}

export default (req, res) => {
  const { id, game, rasterize } = req.query
  svgData(id, game)
    .catch(err => Promise.resolve(results(err.title, '', err.message)))
    .then(template)
    .then(data => type(data, rasterize))
    .then(img => {
      res.setHeader('Content-Type', img.type)
      res.send(img.data)
    })
    .catch(err => res.send(err))
}
