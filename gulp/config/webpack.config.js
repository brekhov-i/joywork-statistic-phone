const isBuild = process.argv.includes('--build');

export const webpackConfig =  {
    mode: isBuild ? "production" : 'development',
    devtool: isBuild ? undefined : 'inline-source-map',
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ],
    },
};