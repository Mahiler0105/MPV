module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@helpers': './src/helpers',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@typings': './src/typings',
          '@assets': './src/assets',
          '@data': './src/data',
          '@hooks': './src/hooks',
          '@theme': './src/theme',
          '@actions': './src/actions',
          '@context': './src/context',
          '@reducers': './src/reducers',
          '@states': './src/states',
        },
      },
    ],
  ],
};
