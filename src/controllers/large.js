import { large as template } from '../svg'
import { svgData } from '../api'

export default (req, res) => {
  const { id, game } = req.params
  if (isNaN(id)) {
    res.send('Ludum Dare competition must be a valid integer (eg. `44/game-name`)')
    return
  }
  svgData(id, game).then(data => {
    res.header("Content-Type", "image/svg+xml")
    res.send(template(data))
  }).catch(err => res.send(err))
}
