var config = {
	entry: './main.js',
	
	output: {
		path:'./',
		filename: 'index.js',
	},
	
	devServer: {
		inline: true,
		port: 8080
	},
	
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				
				query: {
					presets: ['es2015', 'react']
				}
			},
			{test: /\.css$/, loader: 'style-loader!css-loader' },
			{test: /\.json$/, loader: 'json'}
		]
	}
};

module.exports = config;