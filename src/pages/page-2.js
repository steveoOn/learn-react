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
      <label label="tab1" secondary>
        <Todo />
      </label>
      <label label="tab2" paddingLR={0} secondary>
        <Fold>
          <h1>siwen</h1>
        </Fold>
      </label>
      <label label="tab3" secondary>
        oh no
      </label>
      <label label="tab4" secondary>
        oh yes
      </label>
    </TabGroup>
  </Layout>
)

export default SecondPage
