import Typography from 'typography'
import bootstrapTheme from 'typography-theme-bootstrap'

const overrides = {
  headerWeight: 700,
  bodyFontFamily: [`Roboto`, `sans-serif`],
  headerFontFamily: [`Poppins`, `sans-serif`],
  includeNormalize: false,
  headerColor: '#343a3f',
  googleFonts: [
    {
      name: `Roboto`,
      styles: [400],
    },
    {
      name: `Poppins`,
      styles: [700],
    },
  ],
  overrideThemeStyles: () => ({
    p: {
      color: '#5d6076',
    },
  }),
}

const typography = new Typography({ ...bootstrapTheme, ...overrides })

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export const { rhythm } = typography
export default typography
