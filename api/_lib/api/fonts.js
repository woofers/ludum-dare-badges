import { registerFont } from 'canvas'
import { resolve } from 'path'

export default () => {
  registerFont(resolve('./fonts/Raleway/Raleway-ExtraBold.ttf'), { family: 'Raleway', weight: 800, style: 'normal' })
  registerFont(resolve('./fonts/Roboto/Roboto-Light.ttf'), { family: 'Roboto', weight: 300, style: 'normal' })
  registerFont(resolve('./fonts/Roboto/Roboto-Bold.ttf'), { family: 'Roboto', weight: 700, style: 'normal' })
}
