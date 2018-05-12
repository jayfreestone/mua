import { injectGlobal } from 'styled-components';
import theme from 'styles/theme';

/**
 * Adds global CSS to styled-components. Theme is referenced directly as we 
 * cannot access it via provider in injectGlobal.
 */
injectGlobal`
  body {
    font-family: 'grad', serif;
    color: ${theme.base};
    background-color: ${theme.bg};
  }
`;
