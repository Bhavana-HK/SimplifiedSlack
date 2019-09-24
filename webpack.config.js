var config = {
    mode: 'development',
    // mode:'production',
    entry: {
        js: ['babel-polyfill', './main.js'],
        vendor: ['react']
    },

    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 7778
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', {
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }, '@babel/preset-react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.wav$/,
                loader: 'file-loader'
            },
        ]
    }
}

module.exports = config;