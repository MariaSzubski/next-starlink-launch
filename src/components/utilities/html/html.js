import React from "react"
import PropTypes from "prop-types"

const HTML = ({ content, className }) => (
  <>
    {content && content.childMarkdownRemark && (
      <div
        dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
        className={className}
      />
    )}
  </>
)

HTML.propTypes = {
  className: PropTypes.string,
  content: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default HTML
