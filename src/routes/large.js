import { large as template } from '../svg'
import { svgData } from '../api'

const empty = value => {
  if (!value) return false
  return Object.keys(value).length > 0 ? value : false
}

export default (req, res) => {
  const { id, game } = empty(req.query) || empty(req.params)
  if (isNaN(id)) {
    res.send('Ludum Dare competition must be a valid integer (eg. `44/game-name`)')
    return
  }
  svgData(id, game).then(data => {
    res.setHeader("Content-Type", "image/svg+xml")
    res.send(template(data))
  }).catch(err => res.send(err))
}
