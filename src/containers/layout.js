import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const query = graphql`
  query SiteTitleQuery {
    site: wpcontent {
      generalSettings {
        title
        description
      }
    }
  }
`

function LayoutContainer(props) {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout
          {...props}
          siteTitle={data.site.generalSettings.title}
          description={data.site.generalSettings.description}
        />
      )}
    />
  )
}

export default LayoutContainer
