/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const createSitePages = async (graphql, actions, reporter) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      wpcontent {
        pages {
          nodes {
            id
            uri
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageNodes = (result.data.wpcontent.pages || {}).nodes || []

  pageNodes.forEach(node => {
    const id = node.id
    const path = node.uri

    reporter.info(`Creating Page: ${path}`)

    createPage({
      path,
      component: require.resolve("./src/templates/page.js"),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await Promise.all([await createSitePages(graphql, actions, reporter)])
}
