import fs from 'fs'
import svg from './svg/large.svg'

export default route => {
  route.get('/', (req, res) => {
    res.header("Content-Type", "image/svg+xml");
    res.send(svg)
  })
}
