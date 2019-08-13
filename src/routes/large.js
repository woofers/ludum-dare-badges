import { large as template } from '../svg'
import { svgData } from '../api'
import results from '../models/results'

export default (req, res) => {
  const { id, game } = req.query
  svgData(id, game)
    .catch(err => Promise.resolve(results(err.title, '', err.message)))
    .then(data => {
      res.setHeader("Content-Type", "image/svg+xml")
      res.send(template(data))
    })
}
