import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import * as styles from "./styles.module.scss"

const SFlex = styled.div`
  margin: ${props => (props.$fluid ? "0rem" : "0rem -1.4rem")};
  flex-wrap: ${props => (props.$nowrap ? "nowrap" : "wrap")};
  justify-content: ${props => props.$justify};
  align-items: ${props => props.$align};
`

const Flex = ({ children, ...props }) => (
  <SFlex
    $nowrap={props.nowrap ? 1 : 0}
    $justify={props.justify}
    $align={props.align}
    $fluid={props.fluid ? 1 : 0}
    className={styles.flex}
    {...props}
  >
    {children}
  </SFlex>
)

Flex.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  justify: PropTypes.string,
  nowrap: PropTypes.bool,
}

Flex.defaultProps = {
  align: "normal",
  fluid: false,
  justify: "flex-start",
  nowrap: false,
}

export { Flex }
