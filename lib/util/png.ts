import svg2img from 'svg2img'

export const convertToPng = (svg: string) => {
  return new Promise((resolve, reject) => {
    svg2img(svg, {
      resvg: {
        font: {
          fontFiles: ['./fonts/Roboto/Roboto-Light.ttf', './fonts/Roboto/Roboto-Bold.ttf', './fonts/Raleway/Raleway-ExtraBold.ttf'],
          loadSystemFonts: false, 
          defaultFontFamily: 'Roboto'
        }
      }
    }, (err, buf) => {
      if (err) return reject(err)
      return resolve(buf)
    })
  })
}
