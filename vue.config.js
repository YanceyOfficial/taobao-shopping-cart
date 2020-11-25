module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData:
          '\n          @import "@/assets/style/_variable.scss";\n          @import "@/assets/style/_function.scss";\n        ',
      },
    },
    requireModuleExtension: true,
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.yanceyleo.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
