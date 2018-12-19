import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import Header from '../components/header'
import DropdownNotice from '../components/DropdownNotice'

const Body = styled.div`
  background: transparent;
  margin: 0;
`

const IndexPage = () => (
  <Body>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Header />
  </Body>
)

export default IndexPage
