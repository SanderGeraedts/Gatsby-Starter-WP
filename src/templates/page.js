import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/Seo"

export const query = graphql`
  query PageTemplateQuery($id: ID!) {
    wpcontent {
      page(id: $id) {
        title
        content
        id
      }
    }
  }
`

const PageTemplate = props => {
  const { data, errors } = props
  const page = data && data.wpcontent.page
  return (
    <>
      {errors && <SEO title="GraphQL Error" />}
      {page && <SEO title={page.title || "Untitled"} />}
      <h1>{page.title}</h1>
      <main dangerouslySetInnerHTML={{ __html: page.content }} />
    </>
  )
}

export default PageTemplate
