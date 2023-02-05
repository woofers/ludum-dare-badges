import WidgetDev from './ludum-dare-badges.modules.dev.js'
import WidgetProd from './ludum-dare-badges.modules.js'

const Widget = process.env.NODE_ENV === 'production' ? WidgetProd : WidgetDev

export default Widget