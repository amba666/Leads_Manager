const path = require('path');

module.exports = {
    entry: './leadmanager/frontend/src/index.js', // Entry point of your application
    output: {
        filename: 'main.js', // Output filename
        path: path.resolve(__dirname, 'leadmanager/frontend/static/frontend'), // Output directory path
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
    // ... other webpack configurations if needed
};
