import React from 'react';
import Helmet from 'react-helmet';

const Meta = () => (
  <Helmet
    htmlAttributes={{
      lang: 'en',
    }}
    title="Matt Shirley - Resume"
  >
    <meta name="description" content="Resume for Matt Shirley" />
    <style type="text/css">
      {`
          @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
          @import url('https://fonts.googleapis.com/css?family=Open+Sans:700&display=swap');
        `}
    </style>
  </Helmet>
);

export default Meta;
