
exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      extensions: ['.json'],
    }
  })
}