// Configure these:
const srcPath = 'frontend/resources/assets'
const srcTplPath = 'frontend/resources/templates'
const publicPath = 'frontend'
const distPath = 'frontend/dist'

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const mix = require('laravel-mix')
mix.pug = require('laravel-mix-pug')

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
    .js(srcPath + '/js/app.js', distPath + '/assets/js')
    // Compile our main app styles
    .sass(srcPath + '/sass/app.scss', distPath + '/assets/css')
    .options({ processCssUrls: false })
    // Compile pug pages, Note: output var paths doesn't work
    .pug(srcTplPath + '/_pages/**/*.pug', '../../../dist')
    // Copy over directory contents for images and fonts
    .copyDirectory(srcPath + '/images', distPath + '/assets/images')
    .copyDirectory(srcPath + '/fonts', distPath + '/assets/fonts')

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
        ],
    }
})

// Create manifest file for production, sourcemaps for dev
if (mix.inProduction()) {
    mix.version()
} else {
  mix.webpackConfig({
      devtool: 'source-map'
  })
  .sourceMaps()
}

mix.browserSync({
    open: false,
    // Enable if using craft dev
    // proxy: 'localhost:8000',
    // End: Enable if using craft dev
    host: 'localhost',
    injectChanges: true,
    logSnippet: true,
    reload: true,
    // Enable if frontend dev
    proxy: false,
    server: {baseDir: distPath},
    // End: Enable if frontend development
    files: [
        'templates/**/*.twig',
        srcTplPath + '/**/*.pug',
        srcPath + '/js/**/*.jsx',
        distPath + '/assets/css/**/*.css',
        distPath + '/assets/js/**/*.js'
    ],
    port: 8000
})
