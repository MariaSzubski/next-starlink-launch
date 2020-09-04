import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { screen } from "../global/vars"

const SGrid = styled.div`
  padding: ${props => `0rem ${props.$gap}`};
  margin: auto;
  max-width: none;

  display: grid;
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
    {...props}
  >
    {children}
  </SGrid>
)

Grid.propTypes = {
  fluid: PropTypes.bool,
  gap: PropTypes.string,
  template: PropTypes.string,
  mobile: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,

  as: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Grid.defaultProps = {
  fluid: false,
  gap: "1.4rem",
  template: "repeat(auto-fit, minmax(350px, 1fr))",
  mobile: null,
  justify: "start",
  align: "start",
}

export { Grid }
