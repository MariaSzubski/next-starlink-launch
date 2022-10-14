import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { screen } from "../../global/vars"

import * as styles from "./styles.module.scss"

const SContainer = styled.div`
  padding: ${props => (props.$fluid ? "0rem" : "0rem 1.4rem")};
  @media ${screen.min.sm} {
    max-width: ${props => (props.$fluid ? "none" : "54rem")};
  }
  @media ${screen.min.md} {
    max-width: ${props => (props.$fluid ? "none" : "75rem")};
  }
  @media ${screen.min.lg} {
    max-width: ${props => (props.$fluid ? "none" : "96rem")};
  }
  @media ${screen.min.xl} {
    max-width: ${props => (props.$fluid ? "none" : "114rem")};
  }
  @media ${screen.min.xxl} {
    max-width: ${props => (props.$fluid ? "none" : "154rem")};
  }
`

const Container = ({ children, ...props }) => (
  <SContainer
    $gutterWidth={props.gutterWidth}
    $fluid={props.fluid ? 1 : 0}
    classNames={styles.container}
    {...props}
  >
    {children}
  </SContainer>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  gutterWidth: PropTypes.number,
}

Container.defaultProps = {
  fluid: false,
  gutterWidth: 15,
}

export { Container }
