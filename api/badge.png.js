import fetchImage from './_lib/api'

export default (req, res) => {
  const { id, game } = req.query
  fetchImage(id, game, res, true)
}
