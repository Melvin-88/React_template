import path from 'path';
import webpack from 'webpack';


let config = {
    entry: './app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js(x)?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
            {test: /\.json$/, loaders: ['json']},
        ]
    }
};

export default config;
