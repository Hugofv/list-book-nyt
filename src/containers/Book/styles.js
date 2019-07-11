import { css } from 'styled-components'

export const containerModal = css`
  width: 15em;

  @media (min-width: 500px) {
    width: 20em;
  }

  @media (min-width: 768px) {
    width: 30em;
  }

  @media (min-width: 1000px) {
    width: 40em;
  }
`

export const boxModal = css`
  max-height: 15em;

  @media (min-height: 600px) {
    max-height: 25em;
  }

  @media (min-height: 768px) {
    max-height: 35em;
  }

  @media (min-height: 1000px) {
    max-height: 45em;
  }
`