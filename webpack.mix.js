// Configure these:
const sourcePath = 'resources/assets'
const publicPath = 'web'
const distPath = 'web/assets'

const mix = require('laravel-mix')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Extract jquery to the vendor.js file
// Feel free to add any other vendor dependencies that are rarely updated
mix.extract([
        'jquery'
    ])
    .autoload({
        jquery: ['$', 'window.jQuery', "jQuery", "window.$", "jquery", "window.jquery"]
    });


mix.setPublicPath(distPath);

mix
    // Compile our main app entry point
    .js(sourcePath + '/js/app.js', distPath + '/js')
    // Compile our main app styles
    .sass(sourcePath + '/sass/app.scss', distPath + '/css')
    // Compile our cp styles
    .sass(sourcePath + '/sass/cp.scss', distPath + '/css')
    .options({
        processCssUrls: false
    })

    // Copy over directory contents for images and fonts
    .copyDirectory(sourcePath + '/images', distPath + '/images')
    .copyDirectory(sourcePath + '/fonts', distPath + '/fonts')


// Make sure we babelify proper modules and create font files
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules\/(?!(foundation-sites)\/).*/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: mix.config.babel()
                    }
                ]
            },
            {
                test: /\.font\.js/,
                loader: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'webfonts-loader'
                    ]
                })
            }
        ]
    }
})

// Create manifest file for production, sourcemaps for dev
if (mix.inProduction()) {
    mix.version()
} else {
    mix.sourceMaps()
}


mix.browserSync({
    open: false,
    proxy: 'localhost:8000',
    host: 'localhost',
    injectChanges: true,
    logSnippet: true,
    files: [
        'templates/**/*.twig',
        sourcePath + '/js/**/*.jsx',
        distPath + '/css/app.css',
        distPath + '/assets/js/**/*.js'
    ],
    port: 80
})
