import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: `Let's get together and learn some things together to improve our skills and grow as developers. Also to hold each other responsible to small micro-milestones.`,
            },
            {
              name: 'keywords',
              content:
                'tailwind, gatsby, not-slackers, !slackers, flatiron school',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="slider">{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
