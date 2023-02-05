import React from 'react'

type Props = {
  host?: string
  game: string
  type?: 'svg' | 'png'
}

const LudumDare: React.FC<Props> = ({ host = 'https://badges.jaxs.onl', game, type = 'svg', ...rest }) => {
  const api = `${host}/${game}/badge.${type}`
  const name = game.substring(game.indexOf('/') + 1)
  return <img alt={`${name} Ludum Dare results`} {...rest} src={api} />
}

export default LudumDare
