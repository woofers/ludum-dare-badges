import { minify } from 'html-minifier'

const minifySvg = (code: string) => {
  return new Promise((resolve, reject) => {
    const out = minify(code, {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true
    })
    if (!out) reject('Can not minify HTML')
    return resolve(out)
  })
}

export default minifySvg