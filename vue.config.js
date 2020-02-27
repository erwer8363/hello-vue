const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const BabiliPlugin = require('babili-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')

const configs = require('./config')

const isDev = process.env.NODE_ENV === 'development'
const cfg = process.env.NODE_ENV === 'production' ? configs.build.env : configs.dev.env

// process.env.VUE_APP_API
function resolve(dir) {
  console.log('当前是哪个模式', process.env.VUE_APP_TITLE)
  return path.resolve(__dirname, dir)
}

module.exports = {
  publicPath: isDev ? '/' : './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: (config) => {
    const pluginsPro = [
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(`\\.(${['js', 'css'].join('|')}$)`),
        threshold: 8192,
        minRatio: 0.8,
      }),
      new BundleAnalyzerPlugin(),
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          drop_debugger: true,
          drop_console: true,
        },
      }),
    ]
    const pluginDev = []
    if (!isDev) {
      config.plugins = [...config.plugins, ...pluginsPro]
    } else {
      config.plugins = [...config.plugins, ...pluginDev]
    }
  },
  chainWebpack: (config) => {
    // console.log('传进来的配置文件是...', config)
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
    config.resolve.extensions.add('.vue').add('.js').add('.scss')
    config.plugin('define').tap((args) => {
      const name = 'process.env'
      args[0][name] = merge(args[0][name], cfg)
      return args
    })
    config.when(!isDev,
      (config) => config.plugin('minify').use(BabiliPlugin),
      (config) => config.devtool('source-map'))
  },
  css: {
    requireModuleExtension: true,
    sourceMap: isDev,
    loaderOptions: {
      css: {
        // 这里的选项会传递给css-loader
      },
      postcss: {
        // 这里的选项会传递给postcss-loader
      },
      scss: {
        prependData: '@import "~@/variables.scss";',
      },
    },
  },
  devServer: {
    host: 'localhost',
    port: '9527',
    https: false,
    open: true,
    hotOnly: true,
    proxy: {
      '/repos': {
        target: 'https://api.github.com',
        changeOrigin: true,
      },
    },
  },
  parallel: require('os').cpus().length > 1,
}
