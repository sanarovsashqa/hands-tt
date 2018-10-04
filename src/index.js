import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

injectGlobal`
  ${styledNormalize}

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  #root {
    min-width: 320px;
    font-family: 'Arial', Helvetica, sans-serif;
    font-size: 14px;
    line-height: 1.2;
    font-weight: 400;
    color: #000000;
    background-color: #ffffff;
  }
`;

ReactDOM.render(<App />, document.querySelector('#root'));
