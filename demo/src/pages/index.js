import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Helmet
      title={'ludum-dare-badges'}
      htmlAttributes={{ lang: 'en' }}>
    </Helmet>
    <h1>ludum-dare-badges</h1>
    <h3>SVG badges for Ludum Dare Game Jam results</h3>
  </Layout>
)

export default IndexPage
