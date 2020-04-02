import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import Card from '../components/Card'

import { eventsArray } from '../data/events'

const IndexPage = () => (
  <Layout>
    {eventsArray.map(day => {
      return <Card props={day} />
    })}
  </Layout>
)

export default IndexPage
