import React, { Component } from 'react'
import { AssemblyFilters, AssemblyProcesses, Filter, Page } from '../../components'
import { Layout } from '../../UI'

class Home extends Component {
  render () {
    return (
      <Page>
        <AssemblyFilters>
          <Layout.Sidebar>
            <Filter/>
          </Layout.Sidebar>
          <Layout.Content>
            <AssemblyProcesses/>
          </Layout.Content>
        </AssemblyFilters>
      </Page>
    )
  }
}

export default Home
