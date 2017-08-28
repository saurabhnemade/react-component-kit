module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactComponentKit',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    extra: {
      module: {
        rules: [
          {
            test: /\.md$/,
            use: [
              { loader: 'raw-loader' }
            ]
          },
          {
            test: /\.js$/,
            use: [
              { loader: 'eslint-loader' }
            ]
          }
        ]
      }
    }
  }
}
