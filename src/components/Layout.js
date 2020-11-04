import React from "react"
import Wrapper from "./Wrapper"
import GlobalStyles from "../assets/styles/GlobalStyles"
import SEO from "./Seo"

const Layout = ({ children, siteTitle, description }) => (
  <>
    <GlobalStyles />
    <SEO title={siteTitle} description={description} />
    <Wrapper>{children}</Wrapper>
  </>
)

export default Layout
