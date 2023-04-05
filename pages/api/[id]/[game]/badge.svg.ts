import type { NextApiRequest, NextApiResponse } from 'next'
import fetchImage from '../../../../lib/api'
import { getSingle } from '../../../../lib/util/path'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const id = getSingle(req.query.id)
  const game = getSingle(req.query.game)
  fetchImage(id, game, res, false)
}

export default handler