import styled, { css } from 'styled-components/macro'
import { space, display, style, fontSize, fontFamily, lineHeight, fontWeight, letterSpacing, verticalAlign } from 'styled-system'

const fs = style({ prop: 'fs', cssProperty: 'fontSize', transformValue: n => /^\d+$/.test(n) ? n + 'px' : n })
const ff = style({ prop: 'ff', cssProperty: 'fontFamily' })
const fw = style({ prop: 'fw', cssProperty: 'fontWeight' })
const lh = style({ prop: 'lh', cssProperty: 'lineHeight' })

const Text = styled('span')(
  display,
  space,
  fontSize,
  fontFamily,
  lineHeight,
  fontWeight,
  letterSpacing,
  verticalAlign,
  fs, ff, fw, lh,
  props => props.uppercase && css`text-transform: uppercase;`,
  props => props.pointer && css`cursor: pointer;`,
  props => props.underline && css`text-decoration: underline;`,
  props => props.small && css`font-size: 20px;`,
  props => props.medium && css`font-size: 24px;`,
  props => props.large && css`font-size: 30px;`,
  props => props.extralarge && css`font-size: 42px;`,
  props => props.white && css`color: ${props => props.theme.colors.white};`,
  props => props.primary && css`color: ${props => props.theme.colors.primary};`,
  props => props.secondary && css`color: ${props => props.theme.colors.secondary};`,
  props => props.css
)

Text.displayName = 'Text'

Text.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontFamily.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
}

export default Text
