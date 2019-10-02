import { css, FlattenInterpolation } from 'styled-components';

export const normalize: FlattenInterpolation<{}> = css`
  /* stylelint-disable*/

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  /* stylelint-enable */
`;

export const theme = {
  breakpoints: ['48rem', '64rem', '76rem', '88rem'],
  fontSizes: [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 48, 64],
  colors: {
    white: '#ffffff',
    black: '#000000',
    dark: '#333333',
    gray: [
      '#f9f9f8',
      '#eeedea',
      '#e3e0db',
      '#d6d2cb',
      '#c8c3b9',
      '#b9b2a6',
      '#a79e8f',
      '#938775',
      '#746a5b',
      '#443e35'
    ],
    orange: [
      '#fff2e0',
      '#ffe4bf',
      '#ffd59a',
      '#ffc370',
      '#ffaf3e',
      '#ff9500',
      '#e68600',
      '#ca7600',
      '#a86200',
      '#794600'
    ],
    yellow: [
      '#fdffe6',
      '#faffcb',
      '#f8ffac',
      '#f5ff86',
      '#f0ff53',
      '#eaff00',
      '#d4e700',
      '#bacb00',
      '#9ba900',
      '#717b00'
    ],
    lime: [
      '#f0ffe5',
      '#dfffc9',
      '#ccffa8',
      '#b5ff81',
      '#98ff4f',
      '#6aff00',
      '#60e700',
      '#54cb00',
      '#46a900',
      '#337b00'
    ],
    green: [
      '#eaffec',
      '#d4ffd7',
      '#baffbf',
      '#9affa2',
      '#6eff7a',
      '#00ff15',
      '#00e713',
      '#00cb10',
      '#00a90d',
      '#007b0a'
    ],
    teal: [
      '#e9fff6',
      '#d1ffec',
      '#b5ffe0',
      '#93ffd2',
      '#65ffbf',
      '#00ff95',
      '#00e787',
      '#00cb76',
      '#00a963',
      '#007b48'
    ],
    cyan: [
      '#e6fcff',
      '#cafaff',
      '#aaf8ff',
      '#84f4ff',
      '#51f0ff',
      '#00eaff',
      '#00d3e7',
      '#00bacb',
      '#009ba9',
      '#00707b'
    ],
    blue: [
      '#e5f0ff',
      '#c8dfff',
      '#a7ccff',
      '#80b5ff',
      '#4e97ff',
      '#006aff',
      '#005fe6',
      '#0053c9',
      '#0045a6',
      '#003175'
    ],
    indigo: [
      '#eceaff',
      '#d7d4ff',
      '#bfbaff',
      '#a29aff',
      '#7a6fff',
      '#1500ff',
      '#1300e6',
      '#1000ca',
      '#0d00a8',
      '#0a007a'
    ],
    violet: [
      '#f6e9ff',
      '#ecd2ff',
      '#e0b6ff',
      '#d294ff',
      '#bf66ff',
      '#9500ff',
      '#8600e6',
      '#7600ca',
      '#6200a8',
      '#460079'
    ],
    fuschia: [
      '#ffebfd',
      '#ffd4fb',
      '#ffbaf9',
      '#ff9bf6',
      '#ff70f3',
      '#ff00ea',
      '#e700d4',
      '#cb00ba',
      '#a9009b',
      '#7b0071'
    ],
    pink: [
      '#ffeaf3',
      '#ffd4e5',
      '#ffb9d6',
      '#ff99c3',
      '#ff6daa',
      '#ff006a',
      '#e70060',
      '#cb0054',
      '#a90046',
      '#7b0033'
    ],
    red: [
      '#ffebe9',
      '#ffd5d2',
      '#ffbcb6',
      '#ff9d95',
      '#ff7467',
      '#ff1500',
      '#e61300',
      '#ca1000',
      '#a80d00',
      '#7a0a00'
    ]
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    base: `BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif`,
    monospace: `"Inconsolata", "Consolas", "Monaco", monospace`
  },
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    normal: 1,
    medium: 1.25,
    large: 1.5
  },
  letterSpacings: {
    small: '-0.05rem',
    normal: 'normal',
    medium: '0.1rem',
    large: '0.25rem'
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  borders: [0, '1px solid', '2px solid', '4px solid', '8px solid', '16px solid', '32px solid'],
  radii: [0, 2, 4, 6, 16, 9999, '50%', '100%']
};

export const globalStyles = `
  ${normalize}

  html,
  body {
    background-color: ${theme.colors.white};
    font-family: ${theme.fonts.base};
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;

    * {
      box-sizing: border-box;
    }

    #__next {
      width: 100%;
      height: 100%;

      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    }

    a, button {
      text-decoration: none;
      cursor: pointer;
    }
  }
`;
