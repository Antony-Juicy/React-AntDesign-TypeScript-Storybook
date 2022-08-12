/**
 * stroybook 引用 less 文件失效原因和解决方法请参考 https://github.com/storybookjs/storybook/issues/9796#issuecomment-638091704
 * storybook的webpack配置，请参考webpage官网
 * 需要安装style-loader, css-loader
 * less的webpack配置请参考：https://webpack.docschina.org/loaders/less-loader/#lessoptions
 * modifyVars 全局变量配置 请参考 https://lesscss.org/usage/#using-less-in-the-browser-modify-variables
 * javascriptEnabled 设为true， 原因请参考 https://github.com/ant-design/ant-motion/issues/44#issuecomment-407498459
 * 其实lessOptions的配置，跟 craco.config 里的配置是一样的
 * 全局样式在preview.js 里引用
 */
const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/preset-create-react-app',
      options: {
        craOverrides: {
          fileLoaderExcludes: ['less'],
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: { '@primary-color': '#FFA21A' },
              javascriptEnabled: true,
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};
