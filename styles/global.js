import { injectGlobal } from 'styled-components';
import theme from 'styles/theme';

/**
 * Adds global CSS to styled-components. Theme is referenced directly as we 
 * cannot access it via provider in injectGlobal.
 */
injectGlobal`
  ::root {
    --base-spacing: 1em;

    @media (min-width: 40em) {
      --base-spacing: 1.5em;
    }

    @media (min-width: 60em) {
      --base-spacing: 1.8em;
    }
  }

  body {
    font-family: 'grad', serif;
    color: ${theme.base};
    background-color: ${theme.bg};
  }
`;
