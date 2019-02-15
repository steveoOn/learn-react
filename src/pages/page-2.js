import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TabGroup from '../components/TabGroup'
import Todo from '../components/TodoList'
import Fold from '../components/Fold'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <TabGroup>
      <label label="tab1">
        <Todo />
      </label>
      <label label="tab2" paddingLR={0}>
        <Fold>
          <h1>siwen</h1>
        </Fold>
      </label>
      <label label="tab3">oh no</label>
      <label label="tab4">oh yes</label>
    </TabGroup>
  </Layout>
)

export default SecondPage
