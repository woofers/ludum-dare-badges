import { type Result } from '../models/results'

const showZero = true

export const average = (stat: Result['stats'][number]) => showZero || stat.average  ? `(${parseInt(stat.average).toFixed(2)} average from ${stat.rating} ratings)` : '⠀'

export const category = (stat: Result['stats'][number]) => `${stat.category}: `
