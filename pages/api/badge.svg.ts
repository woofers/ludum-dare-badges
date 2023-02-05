import type { NextApiRequest, NextApiResponse } from 'next'
import fetchImage, { registerFonts } from './_lib/api'

registerFonts()

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id, game } = req.query
  fetchImage(id, game, res, false)
}

export default handler