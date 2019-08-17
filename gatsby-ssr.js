/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import Root from './src/components/Layout/Root';

const sheetByPathname = new Map();

export const wrapPageElement = Root;

// eslint-disable-next-line react/prop-types,react/display-name
export const wrapRootElement = ({ element, pathname }) => {
  const sheet = new ServerStyleSheet();
  sheetByPathname.set(pathname, sheet);

  return (
    <StyleSheetManager sheet={sheet.instance}>
      {element}
    </StyleSheetManager>
  );
};

export const onRenderBody = ({ setHeadComponents, pathname }) => {
  const sheet = sheetByPathname.get(pathname);
  if (sheet) {
    setHeadComponents([sheet.getStyleElement()]);
    sheetByPathname.delete(pathname);
  }
};
