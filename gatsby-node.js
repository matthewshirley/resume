/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

require.resolve('babel-plugin-styled-components');

exports.onCreateBabelConfig = ({ stage, actions }, pluginOptions) => {
  const ssr = stage === 'build-html' || stage === 'build-javascript';

  actions.setBabelPlugin({
    name: 'babel-plugin-styled-components',
    stage,
    options: { ...pluginOptions, ssr },
  });
};

exports.onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'styled-components': path.resolve('./node_modules/styled-components'),
      },
    },
  });
};
