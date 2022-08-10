
const path = require('path')
const MiniCssExtractPligin = require('mini-css-extract-plugin')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'


module.exports = {
	entry: '/main.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'js/bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env', '@babel/preset-react' ]
					},
				}]
			},
			{
				test: /\.scss$/,
				use: [ MiniCssExtractPligin.loader, 'css-loader', 'sass-loader' ]
			},
		],
	},
	plugins: [
		new MiniCssExtractPligin({
			filename: 'css/bundle.css'
		}),
	],
	resolve: {
		extensions: [ '.jsx', '.js' ],
	},
}
