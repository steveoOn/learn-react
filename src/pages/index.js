import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import HP3 from '../images/HP3-logo.svg'
import '../../src/index.css'

const Welcome = styled.div`
  width: 424px;
  margin: 0 auto;
`

const HP3logo = styled.img`
  margin: 90px 0 24px 0;
`

const H = styled.h5`
  color: #666;
  font-size: 18px;
  margin: 0;
  font-family: 'SF Mono';
`

const P = styled.p`
  margin: 24px 0;
  color: #666;
  font-size: 14px;
  font-weight: 500;
  font-family: 'SF Mono';
`

const Tip = styled.div`
  width: 424px;
  margin: 54px auto;
  background: #f5f5f5;
  border: 4px solid #42777d;
  border-radius: 4px;
  display: flex;
  align-items: center;
  text-align: center;
`

const Article = styled.article`
  width: 424px;
  margin: 0 auto;
  font-weight: 600;
  font-family: 'SF Mono';
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <Welcome>
        <HP3logo src={HP3} alt="HP3" />
        <H>
          Welcome to HP3 product design testing environment
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </H>
      </Welcome>
      <Tip>
        <P>
          The testing environment is still under construction…
          <span role="img" aria-label="construction">
            🚧
          </span>
        </P>
      </Tip>
      <Article>
        <h4 style={{ color: '#60BE94' }}>Purpos</h4>
        <P>
          The aim of product design testing is to quantify any of new feature
          that still in experiment.
        </P>
        <P>
          The environment is based on fake data with 100% real interact with
          users.
        </P>
        <P>
          To observe actions of user to achieve their mission and will expose
          issues during the process.
        </P>
      </Article>
    </Layout>
  )
}

export default IndexPage
