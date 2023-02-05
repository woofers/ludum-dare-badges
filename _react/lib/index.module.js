import WidgetDev from './ludum-dare-badges.module.dev.js'
import WidgetProd from './ludum-dare-badges.module.js'

const Widget = process.env.NODE_ENV === 'production' ? WidgetProd : WidgetDev

export default Widget