/* eslint-disable */
export const colors = {
  white: "#FFFFFF",
  gray100: "#D1D3E7",
  navy: "#16233E",
  black: "#10141B",

  yellow: "#FEC52E",
  green: "#009978",
  blue: "#004876",
}

export const fonts = {
  bai: "'Bai Jamjuree', 'Lucida Grande', sans-serif",
  exo: "Exo, 'Lucida Grande', sans-serif",
}

// breakpoints
export const bp = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
}

export const screen = {
  min: {
    xs: `(min-width: ${bp.xs}px)`,
    sm: `(min-width: ${bp.sm}px)`,
    md: `(min-width: ${bp.md}px)`,
    lg: `(min-width: ${bp.lg}px)`,
    xl: `(min-width: ${bp.xl}px)`,
    xxl: `(min-width: ${bp.xxl}px)`,
  },
  max: {
    xs: `(max-width: ${bp.xs - 1}px)`,
    sm: `(max-width: ${bp.sm - 1}px)`,
    md: `(max-width: ${bp.md - 1}px)`,
    lg: `(max-width: ${bp.lg - 1}px)`,
    xl: `(max-width: ${bp.xl - 1}px)`,
    xxl: `(max-width: ${bp.xxl - 1}px)`,
  },
}
/* eslint-enable */