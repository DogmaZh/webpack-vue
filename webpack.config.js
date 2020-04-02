const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssestPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;
const defaultFilenamePattern = () => isDev ? '[path][name].[ext]' : '[path][name].[hash].[ext]'

const assetsLoader = () => {
  return [{
    loader: 'file-loader',
    options: {
      name: defaultFilenamePattern(),
      esModule: false
    }
  }]
}

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssestPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config;
}

const vueStyleLoaders = extra => {
  const loaders = [
    isDev ? 'vue-style-loader' :  MiniCssExtractPlugin.loader,
    'css-loader'
  ]

  if (extra) {
    loaders.push(extra)
  }

  return loaders
}

const babelOptions = preset => {
  const opts = {
    presets: [
      '@babel/preset-env'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  }

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
}

const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: babelOptions()
  }]

  if (isDev) {
    loaders.push('eslint-loader')
  }

  return loaders
}

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: 'index.html'
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'public')
      }
    ]),
    new MiniCssExtractPlugin({
      filename: 'app.[hash].css'
    })
  ]

  return base;
}

const outputParams = () => {
  const params = {
    filename: filename('js'),
    path: path.resolve(__dirname, 'public/static/user_new'),
    publicPath: '/',
  }

  return params;
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.js']
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname),
      '@assets': path.resolve(__dirname, 'src/assets'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  optimization: optimization(),
  devServer: {
    port: 3779,
    hot: isDev,
    historyApiFallback: true,
  },
  devtool: isDev ? 'source-map' : '',
  output: outputParams(),
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      {
        test: /\.styl(us)?$/,
        use: vueStyleLoaders('stylus-loader')
      },
      {
        test: /\.(png|img|jpg|svg|gif)$/,
        use: assetsLoader()
      },
      {
        test: /\.(ttf|wof|woff|eot)$/,
        use: assetsLoader()
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
    ]
  }
}