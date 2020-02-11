import { createGlobalStyle } from 'styled-components';
import theme from './index';

const PageStyle = createGlobalStyle`
    * {
        -webkit-appearance: none;
        -moz-appearance: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        color: ${theme.colors.text};
        font-size: ${theme.fontSizes[2]}px;
        font-family: ${theme.font};
        line-height: 1.375;
        background-color: ${theme.colors.bg};
    }

    a {
        color: currentColor;
        text-decoration: none;
    }
`;

export default PageStyle;
