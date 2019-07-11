import { createGlobalStyle } from 'styled-components/macro'

const fontSize = '16px'
const backgroundColor = 'hsla(201,  20%, 96%, 1)'
const color = 'hsla(211,  20%, 43%, 1)'
const lineHeight = '1.5'
const firstFontFamily = '"Roboto"'
const fontFamily = `${firstFontFamily}, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
const fontWeight = 400

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    outline: none;
  }
  html {
    font-family: sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
  }
  body {
    margin: 0;
    font-family: ${fontFamily};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    color: ${color};
    background-color: ${backgroundColor};
  }
  div {
    -webkit-overflow-scrolling: touch;
  }
`
