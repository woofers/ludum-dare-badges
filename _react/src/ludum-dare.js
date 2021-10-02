import React from 'react'

const LudumDare = ({ host, game, type, ...rest }) => {
  const api = `${host}/${game}/badge.${type}`
  const name = game.substring(game.indexOf('/') + 1)
  return <img src={api} alt={`${name} Ludum Dare results`} {...rest} />
}

LudumDare.defaultProps = {
  host: 'https://badges.jaxs.onl',
  type: 'svg'
}

export default LudumDare
