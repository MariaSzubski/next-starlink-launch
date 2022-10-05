import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

const Link = ({ children, to, activeClassName, target, ...props }) => {
  const link_test = /^\/(?!\/)/.test(to)

  const internal = (
    <GatsbyLink to={to} activeClassName={activeClassName} {...props}>
      {children}
    </GatsbyLink>
  )

  const external = (
    <a
      href={to}
      target={target && target}
      rel={target === "_blank" ? "noreferrer" : ""}
      {...props}
    >
      {children}
    </a>
  )

  return link_test ? internal : external
}

Link.propTypes = {
    // external links
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  target: PropTypes.string, 
    to: PropTypes.string.isRequired, // internal links
}

Link.defaultProps = {
  target: "",
}

export default Link
