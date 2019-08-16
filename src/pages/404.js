import React from 'react';
import Helmet from 'react-helmet';

import { Text } from '@mattshirley/design';

const Page404 = () => (
  <>
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title="Matt Shirley - 404"
    />
    <Text>The directory or file does not exist.</Text>
  </>
);

export default Page404;
