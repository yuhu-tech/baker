import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  publicPath: '/public/',
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: './index' },
        { path: '/home', component: './Home' },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: { webpackChunkName: true },
        title: 'edit title in /.umirc',
        dll: true,
        locale: {
          enable: true,
          default: 'en-US',
        },
        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
  proxy: {
    '/api/': {
      target: 'https://127.0.0.1:3000',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};

export default config;
