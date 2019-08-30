import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <Layout>
    <Helmet
      title={'404 - Bad Route'}
      htmlAttributes={{ lang: 'en' }}>
    </Helmet>
    <h1>404</h1>
    <h3>Route does not exist</h3>
    <Link to="/">Back to demo</Link>
  </Layout>
)

export default NotFoundPage
