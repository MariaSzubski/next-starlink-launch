import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { screen } from "../../global/vars"

import * as styles from "./styles.module.scss"

const SGrid = styled.div`
  padding: ${props => `0rem ${props.$gap}`};
  justify-content: ${props => props.$justify};
  align-items: ${props => props.$align};
  grid-gap: ${props => props.$gap};
  grid-template-columns: ${props => props.$mobile};

  @media ${screen.min.sm} {
    max-width: ${props => (props.$fluid ? "none" : "54rem")};
  }
  @media ${screen.min.md} {
    max-width: ${props => (props.$fluid ? "none" : "75rem")};
    grid-template-columns: ${props => props.$template};
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

const Grid = ({ children, ...props }) => (
  <SGrid
    $fluid={props.fluid ? 1 : 0}
    $gap={props.gap}
    $template={props.template}
    $mobile={props.mobile ? props.mobile : props.template}
    $justify={props.justify}
    $align={props.align}
    className={styles.grid}
    {...props}
  >
    {children}
  </SGrid>
)

Grid.propTypes = {
  align: PropTypes.string,
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  gap: PropTypes.string,
  justify: PropTypes.string,

  mobile: PropTypes.string,
  template: PropTypes.string,
}

Grid.defaultProps = {
  align: "start",
  fluid: false,
  gap: "1.4rem",
  justify: "start",
  mobile: null,
  template: "repeat(auto-fit, minmax(350px, 1fr))",
}

export { Grid }
