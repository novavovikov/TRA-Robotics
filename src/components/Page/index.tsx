import React, { FC } from 'react'
import { Layout } from '../../UI'
import { Header } from '../index'

const Page: FC = ({ children }) => {
  return (
    <Layout.Page>
      <Header/>

      <Layout.Container>
        {children}
      </Layout.Container>
    </Layout.Page>
  )
}

export default Page
