import svg2img from 'svg2img'

export const convertToPng = (svg: string) => {
  return new Promise((resolve, reject) => {
    svg2img(svg, (err, buf) => {
      if (err) return reject(err)
      return resolve(buf)
    })
  })
}
