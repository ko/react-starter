var path = require('path');

module.exports = {
    resolve: {
        root: [ path.join(__dirname, 'node_modules') ],
        extensions: ['', '.scss', '.jsx', '.js', '.json']
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        progress: true,
    },

    entry: [
        path.resolve(__dirname, 'app/main.js'),
    ],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },

    module: {
        loaders: [{
            test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
            //exclude: /(node_modules)/,
            loader: 'babel', // The module to load. "babel" is short for "babel-loader"
            query: {
                presets: ['es2015', 'react']
            }
        }, { 
            test: /\.less$/, 
            loader: "style-loader!css-loader!less-loader" 
        }, { 
            test: /\.gif$/, 
            loader: "url-loader?mimetype=image/png" 
        }, { 
            test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, 
            loader: "url-loader?mimetype=application/font-woff" 
        }, { 
            test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, 
            loader: "file-loader?name=[name].[ext]" 
        }, {
            test: /(\.scss|\.css)$/,
            loader: 'style!css-loader'
        }
        ]
    },
};
