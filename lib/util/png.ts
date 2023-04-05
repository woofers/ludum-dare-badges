import svg2img from 'svg2img'
import { join, resolve as pathResolve } from 'path'

export const convertToPng = (svg: string) => {
  return new Promise((resolve, reject) => {
    svg2img(svg, {
      resvg: {
        font: {
          fontFiles: [
            join(pathResolve('.'), 'fonts', 'Roboto', 'Roboto-Light.ttf'),
            join(pathResolve('.'), 'fonts', 'Roboto', 'Roboto-Bold.ttf'),
            join(pathResolve('.'), 'fonts', 'Raleway', 'Raleway-ExtraBold.ttf'),
          ],
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
