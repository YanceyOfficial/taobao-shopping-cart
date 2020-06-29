module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/style/_variable.scss";
          @import "@/assets/style/_function.scss";
        `,
      },
    },
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
};
