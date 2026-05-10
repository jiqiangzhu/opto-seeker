const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * 仅用于 Vue Router 的 base（hash 模式下为 # 前的路径前缀）。
 * JS/CSS 等静态资源始终用相对路径 publicPath: './'，这样在 GitHub Pages 子路径下与用 Live Server 直接打开 dist 都能加载到脚本。
 */
function normalizeBasePath(raw) {
  if (raw === undefined || raw === null) return null;
  const s = String(raw).trim();
  if (s === '' || s === '/') return '/';
  let p = s;
  if (!p.startsWith('/')) p = `/${p}`;
  if (!p.endsWith('/')) p = `${p}/`;
  return p;
}

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const envBase = normalizeBasePath(process.env.BASE_PATH);

  let publicPath;
  let routerBase;
  if (isProd) {
    publicPath = './';
    routerBase = envBase != null ? envBase : '/';
  } else {
    publicPath = '/';
    routerBase = '/';
  }

  return {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      publicPath,
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        vue$: 'vue/dist/vue.esm.js',
      },
    },
    module: {
      rules: [
        { test: /\.vue$/, loader: 'vue-loader' },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: 'asset/resource',
          generator: { filename: 'img/[hash:8][ext][query]' },
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        __APP_BASE_PATH__: JSON.stringify(routerBase),
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        title: '追光生物科技 | OptoSeeker',
      }),
    ],
    devServer: {
      static: path.join(__dirname, 'public'),
      historyApiFallback: true,
      port: 8080,
      hot: true,
    },
    devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
  };
};
