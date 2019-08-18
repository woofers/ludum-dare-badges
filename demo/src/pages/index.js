import React, { useState } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Input from '../components/input'
import Form from '../components/form'
import Select from '../components/select'
import Widget from '../components/widget'

const IndexPage = () => {
  const [id, setId] = useState('')
  const [game, setGame] = useState('')
  const [type, setType] = useState('svg')
  return (
    <Layout>
      <Helmet
        title={'ludum-dare-badges'}
        htmlAttributes={{ lang: 'en' }}>
      </Helmet>
      <h1>Ludum Dare Badges</h1>
      <h3>SVG badges for Ludum Dare Game Jam results</h3>
      <Form>
        <Input width="200px" disabled label="badges.vandoorn.ca/" />
        <Input width="145px" label="Ludum Dare #" placeholder="44" only="number" set={setId} />
        <Input width="35px" disabled label="/" />
        <Input width="205px" label="Game" placeholder="alien-e-x-p-a-n-s-i-o-n" set={setGame} />
        <Input width="90px" disabled label="/badge." />
        <Select options={['svg', 'png']} set={setType} value={type} />
      </Form>
      { id && game ? <Widget game={`${id}/${game}`} type={type} /> : null }
    </Layout>
  )
}

export default IndexPage
