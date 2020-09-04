import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../global/styles"
import SEO from "./seo"

const Layout = ({ children, ...props }) => (
  <>
    <SEO title={props.title} />
    <GlobalStyles />
    <div id="site-wrapper">
      <header><nav>nav / header</nav></header>
      <main>{children}</main>
      <footer className="text-xs text-center">
        © {new Date().getFullYear()} Maria Szubski Digital, LLC
      </footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

Layout.defaultProps = {}

export default Layout
