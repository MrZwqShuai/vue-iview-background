// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8082,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // context: [ //代理路径
    //   '/users'
    // ],
    // proxypath: 'https://api.github.com',
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    proxyTable: {
      '/api/auth': {
        target: 'http://auth.dianyinbao.net/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api/auth/oauth2/selftoken': '/oauth2/selftoken'
        }
      },
      '/api/store': {
        target: 'http://storeapi.dianyinbao.net/api',
        changeOrigin: true,
        pathRewrite: {
          //获取桌台
          '^/api/store/table/gettables': '/table/gettables',
          //更新桌台信息
          '^/api/store/table/updatetable': '/table/updatetable'
        }
      },
      '/api/food': {
        target: 'http://food.dianyinbao.net/api',
        changeOrigin: true,
        pathRewrite: {
          //获取菜品信息
          '^/api/food/goodinfo/getgoodinfos': '/goodinfo/getgoodinfos'
        }
      },
      '/api/order': {
        target: 'http://order.dianyinbao.net/api',
        changeOrigin: true,
        pathRewrite: {
          //获取账单
          '^/api/order/orderbill/storebills': '/orderbill/storebills'
        }
      }
    }
  }
}
