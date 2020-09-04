import { registerFont } from 'canvas'
import { resolve } from 'path'

export default () => {
  registerFont(resolve('./fonts/Raleway/Raleway-SemiBold.ttf'), { family: 'Raleway', weight: 600, style: 'normal' })
  registerFont(resolve('./fonts/Raleway/Raleway-SemiBoldItalic.ttf'), { family: 'Raleway', weight: 600, style: 'italic' })
  registerFont(resolve('./fonts/Raleway/Raleway-ExtraBold.ttf'), { family: 'Raleway', weight: 800, style: 'normal' })
  registerFont(resolve('./fonts/Raleway/Raleway-ExtraBoldItalic.ttf'), { family: 'Raleway', weight: 800, style: 'italic' })

  registerFont(resolve('./fonts/Roboto/Roboto-Light.ttf'), { family: 'Roboto', weight: 600, style: 'normal' })
  registerFont(resolve('./fonts/Roboto/Roboto-LightItalic.ttf'), { family: 'Roboto', weight: 600, style: 'italic' })
  registerFont(resolve('./fonts/Roboto/Roboto-Bold.ttf'), { family: 'Roboto', weight: 800, style: 'normal' })
  registerFont(resolve('./fonts/Roboto/Roboto-BoldItalic.ttf'), { family: 'Roboto', weight: 800, style: 'italic' })
}
