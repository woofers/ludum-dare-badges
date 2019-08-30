import React from 'react'

const LudumDare = p => {
  const api = `${p.host}/${p.game}/badge.${p.type}`
  const name = p.game.substring(p.game.indexOf('/') + 1)
  return <img src={api} alt={`${name} Ludum Dare results`} />
}

LudumDare.defaultProps = {
  host: 'https://badges.vandoorn.ca',
  type: 'svg'
}

export default LudumDare
