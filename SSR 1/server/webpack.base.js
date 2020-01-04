

module.exports = {
    // tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browser: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }

}