const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './index.js',
    plugins: [
       // Adding our UglifyJS plugin
      new UglifyJSPlugin(),
			// Extract CSS to own bundle, filenmae relative to output.path.
			new MiniCssExtractPlugin({
				filename: 'style.css', // or ../styles/[name].css for dynamic name
				chunkFilename: '[id].css',
		}),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
         {
            loader: 'resolve-url-loader',
            options: {
              debug: true,
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [require('node-normalize-scss').includePaths],
              sourceMap: true,
            }
          }
        ]
      },
      ]
    }
};
