const webpack = require('webpack');
const path = require('path');

module.exports = () => {
	return {
		entry: path.resolve('./app/client.js'),
		output: {
			filename: 'bundle-[chunkhash].js',
			path: path.resolve('./dist/public'),
		},
		context: path.resolve('./app'),
		resolve: {
			modules: [
				path.resolve('./app'),
				'node_modules',
			],
			extensions: ['.js', '.json', '.jsx'],
		},
		plugins: [
		],
		module: {
			rules: [
				{
					test: /\.less$/,
					use: [
						'style-loader',
						'css-loader',
						'less-loader',
					],
				},
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-react'],
								plugins: [
                                    '@babel/plugin-proposal-object-rest-spread',
                                    '@babel/plugin-proposal-class-properties',
                                    '@babel/plugin-syntax-dynamic-import',
                                    [
                                        'import',
                                        {
                                            libraryName: 'antd',
                                            style: 'true',
                                        },
                                    ],
								],
								babelrc: false,
							},
						},
					],
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					use: [
						'file-loader',
					],
				},
				{
					test: /\.html$/,
					use: [
						'html-loader',
					],
				},
			],
		}
	};
};