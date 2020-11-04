import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const detailsQuery = graphql`
  query SEOQuery {
    site: wpcontent {
      generalSettings {
        title
        description
      }
    }
  }
`

function SEO({ description, lang, meta, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        if (!data.site) {
          return
        }
        const metaDescription =
          description || data.site.generalSettings.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={
              title === "Home"
                ? data.site.generalSettings.title
                : `%s | ${data.site.generalSettings.title}`
            }
            meta={[
              {
                name: "description",
                content: metaDescription,
              },
              {
                property: "og:title",
                content: title,
              },
              {
                property: "og:description",
                content: metaDescription,
              },
              {
                property: "og:type",
                content: "website",
              },
              {
                name: "twitter:card",
                content: "summary",
              },
              {
                name: "twitter:creator",
                content: data.site.author,
              },
              {
                name: "twitter:title",
                content: title,
              },
              {
                name: "twitter:description",
                content: metaDescription,
              },
            ].concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: "nl",
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
