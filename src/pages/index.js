import React from 'react'
import Layout from '../components/layout'

import SEO from '../components/seo'
import DropdownNotice from '../components/DropdownNotice'

// const Body = styled.div`
//   background: transparent;
//   margin: 0;
// `

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <DropdownNotice />
  </Layout>
)

export default IndexPage
