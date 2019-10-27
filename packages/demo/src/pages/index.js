import React, { useState } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Input from '../components/input'
import Form from '../components/form'
import Copy from '../components/copy'
import Select from '../components/select'
import Widget from '@ludum-dare-badges/react'
import { css } from '@emotion/core'

const hide = css`
  @media screen and (max-width: 510px) {
    display: none;
  }
`

const IndexPage = p => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [type, setType] = useState('svg')
  const game = id && name ? `${id}/${name}`: ''
  const url = () => {
    if (!p.location.host) return ''
    return `${p.location.protocol}//${p.location.host}`
  }
  const shortUrl = () => {
    return url()
      .replace('https://', '')
      .replace('http://', '')
      .substring(0, 18)
  }
  return (
    <Layout>
      <Helmet
        title={'ludum-dare-badges'}
        htmlAttributes={{ lang: 'en' }}>
      </Helmet>
      <h1>Ludum Dare Badges</h1>
      <h4>SVG badges for Ludum Dare Game Jam results</h4>
      <Form>
        <span css={hide}><Input width="200px" disabled label={`${shortUrl()}/`} /></span>
        <Input width="145px" label="Ludum Dare #" placeholder="44" type="number" set={setId} />
        <span css={hide}><Input width="35px" disabled label="/" /></span>
        <Input width="205px" label="Game" placeholder="alien-e-x-p-a-n-s-i-o-n" set={setName} />
        <span css={hide}><Input width="90px" disabled label="/badge." /></span>
        <Select options={['svg', 'png']} set={setType} value={type} />
        <Copy disabled={!game} value={`${url()}/${game}/badge.${type}`} />
      </Form>
      { url() ? <Widget host={url()} game={game} type={type} /> : null }
    </Layout>
  )
}

export default IndexPage
