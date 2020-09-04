import fetchImage, { registerFonts } from './_lib/api'

registerFonts()

export default (req, res) => {
  const { id, game } = req.query
  fetchImage(id, game, res, false)
}
