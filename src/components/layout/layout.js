import React from "react"
import PropTypes from "prop-types"

import Seo from "./seo"

const Layout = ({ children, ...props }) => (
  <>
    <Seo title={props.title} />
    <div id="site-wrapper">
      <header>
        <nav>nav / header</nav>
      </header>
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
