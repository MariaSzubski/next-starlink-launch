import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const SFlex = styled.div`
  margin: ${props => (props.$fluid ? "0rem" : "0rem -1.4rem")};
  display: flex;
  flex-wrap: ${props => (props.$nowrap ? "nowrap" : "wrap")};
  justify-content: ${props => props.$justify};
  align-items: ${props => props.$align};
  flex-grow: 0;
  flex-shrink: 0;
`

const Flex = ({ children, ...props }) => (
  <SFlex
    $nowrap={props.nowrap ? 1 : 0}
    $justify={props.justify}
    $align={props.align}
    $fluid={props.fluid ? 1 : 0}
    {...props}
  >
    {children}
  </SFlex>
)

Flex.propTypes = {
  nowrap: PropTypes.bool,
  justify: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
}

Flex.defaultProps = {
  nowrap: false,
  justify: "flex-start",
  align: "normal",
  fluid: false,
}

export { Flex }
