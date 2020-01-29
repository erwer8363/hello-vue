const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  publicPath: '/',
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
    ]
    const pluginDev = []
    if (process.env.NODE_ENV === 'production') {
      config.plugins = [...config.plugins, ...pluginsPro]
    } else {
      config.plugins = [...config.plugins, ...pluginDev]
    }
  },
  chainWebpack: (config) => {
    console.log('传进来的配置文件是...', config)
    config.resolve.alias
      .set('@', resolve('src'))
  },
  css: {
    requireModuleExtension: true,
    sourceMap: process.env.NODE_ENV !== 'production',
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
  },
  parallel: require('os').cpus().length > 1,
}
