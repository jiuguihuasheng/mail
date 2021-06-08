const devServerPort = 9527 // TODO: get this variable from setting.ts
// const mockServerPort = 9528 // TODO: get this variable from setting.ts

module.exports = {
  // 路径别名
  configureWebpack: {
    devServer: {
      port: devServerPort,
      open: true,
      overlay: {
        warnings: false,
        errors: true
      },
      before: require('./mock/mock-server.js')
      // proxy: {
      //   // change xxx-api/login => /mock-api/v1/login
      //   // detail: https://cli.vuejs.org/config/#devserver-proxy
      //   [process.env.VUE_APP_BASE_API]: {
      //     target: `http://127.0.0.1:${mockServerPort}/mock-api/v1`,
      //     changeOrigin: true, // needed for virtual hosted sites
      //     ws: true, // proxy websockets
      //     pathRewrite: {
      //       ['^' + process.env.VUE_APP_BASE_API]: ''
      //     }
      //   }
      // }
    },
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
