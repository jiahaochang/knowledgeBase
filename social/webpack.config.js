var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

//app: "./src/index.tsx",
//style: './src/styles/index.less'
//var serverIP = "192.168.199.246";
var serverIP = "localhost";

var isDebug = process.env.dist;

var app = [
	'./src/index.tsx'
];
var comprehensiveQualityReport = [
	'./src/comprehensiveQualityReport.tsx'
];
var style = [
	'./src/styles/index.less'
];
var assessTestReport = [
	'./src/assessTestReport.tsx'
]
var publicPath = './dist/';
if (isDebug){
	app = [
		'webpack-dev-server/client?http://'+serverIP +':' + 2992,
		'webpack/hot/dev-server',
		'./src/index.tsx',
	];
	comprehensiveQualityReport = [
		'webpack-dev-server/client?http://'+serverIP +':' + 2992,
		'webpack/hot/dev-server',
		'./src/comprehensiveQualityReport.tsx'
	];
	assessTestReport = [
		'webpack-dev-server/client?http://'+serverIP +':' + 2992,
		'webpack/hot/dev-server',
		'./src/assessTestReport.tsx'
	];
	style = [
		'webpack-dev-server/client?http://'+serverIP +':' + 2992,
		'webpack/hot/dev-server',
		'./src/styles/index.less'
	];

	publicPath = '/dist/';
}

module.exports = {
  devtool: 'source-map',
  entry: {
    app: app,
    comprehensiveQualityReport:comprehensiveQualityReport,
	assessTestReport:assessTestReport,
    style: style
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
    publicPath: publicPath
  },
  /*externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',

    'echarts': 'echarts',
    'layer': 'layer',
    'jquery': 'jquery',

    'immutable': 'Immutable',
    'type': '{}'
  },*/
  eslint: {
    configFile: '.eslintrc'
  },
  module: {
    loaders: [
		{
			test: /\.ts|tsx$/,
			loader: 'ts-loader'
		},
      {
        test: /\.js?$/,
        exclude: /node_modules|dist/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0', 'stage-1', 'stage-2']
        }
      },/*{
	      test: /\.scss$/,
	      loader: 'style!css!sass'
    	},*/
		{
			test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
		},
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', "css-loader!less-loader")
      },

    ]
  },

	resolve: {
		root: path.join(__dirname, "..", "app"),
		modulesDirectories: ['node_modules'],
		extensions: ["", ".web.js", ".js", ".jsx", ".ts", ".tsx"],
		alias: {
			"common": path.join(__dirname, "./common"),
			"actions":path.join(__dirname, "./actions"),
			"pages":path.join(__dirname, "./pages"),
			"test":path.join(__dirname, "./test")
		}
	},

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("[name].css"),
    /*new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),*/
    new webpack.DefinePlugin({
        __DEBUG__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    })
  ]
}
