/**
 * Page Wrapper
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mattshirley/design';

import pageStyle from './page.module.css';

const Page = ({ element }) => (
  <Box className={pageStyle.container} p={[4, 5]} my={4} mx={[0, 'auto']} maxWidth={['auto', '52rem']}>
    {element}
  </Box>
);

Page.propTypes = {
  element: PropTypes.node.isRequired,
};

export default Page;
