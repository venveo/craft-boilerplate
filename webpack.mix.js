const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')
const mix = require('laravel-mix')
require('./frontend/resources/assets/js/loaders/laravel-mix-handlebars')

const env = process.env.NODE_ENV

// This is where all of our js/fonts/images/sass/etc lives
const srcAssetPath = 'frontend/resources/assets'

// Where are our templates? Pug or twig
const srcTplPath = (env === 'frontend') ? 'frontend/resources/templates' : 'templates'

// Where are we putting our compiled assets
const distPath = (env === 'frontend') ? 'frontend/dist' : 'web'

// SERVER_NAME
if ( env !== 'frontend' && process.env.SERVER_NAME !== undefined ) {
    var bsHost = process.env.SERVER_NAME
}

// browserSync Files
const bsFiles = [
    srcTplPath + '/**/*.twig',
    srcTplPath + '/**/*.hbs',
    distPath + '/**/*.html',
    srcAssetPath + '/js/**/*.jsx',
    distPath + '/assets/css/**/*.css',
    distPath + '/assets/js/**/*.js'
]

// Disable the notification because they're annoying
mix.disableNotifications()

// Automatically pulls your dependencies out into a vendor.js file
mix.extract()

// This is the same as putting this in every file: var $ = require('jquery')
mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery', 'window.$', 'jquery', 'window.jquery'],
    'foundation-sites': ['$.foundation', 'window.jQuery.foundation', 'jQuery.foundation', 'window.$', 'jquery.foundation', 'window.jquery.foundation']
})

mix.setPublicPath(distPath)

mix
    // Compile our main app entry point
    .js(srcAssetPath + '/js/app.js', distPath + '/assets/js')
    // Compile our main app styles
    .sass(srcAssetPath + '/sass/app.scss', distPath + '/assets/css')
    // .options({ processCssUrls: false })
    // Copy over directory contents for images
    .copyDirectory(srcAssetPath + '/images', distPath + '/assets/images')
    // Note: we're not copying fonts in favor of letting webpack sort those out
    .options({
        fileLoaderDirs: {
            fonts: 'assets/fonts',
            images: 'assets/images'
        }
    })
if( env === 'frontend' ){
    mix.hbs({
        layoutsDir: srcTplPath + '/layouts', // Base layout of html structure. [Requirement]
        partialsDir: srcTplPath + '/partials', // This is where your partial html component.
        pagesDir: srcTplPath + '/pages', // This is where your partial html page content `{{> body}}`.
        // createDir: true, // This will create dir on every compiled html
        distDir: distPath // Public dir where to output the compiled html pages. [Requirement]
    })
}

mix.webpackConfig(webpack => {
    return {
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules\/(?!(foundation-sites|dom7|ssr-window|swiper)\/).*/,
                    use: [{
                        loader: 'babel-loader',
                        options: mix.config.babel()
                    }]
                }
            ]
        },
        plugins: [
            new SVGSpritemapPlugin(srcAssetPath + '/images/svgs/**/*.svg', {
                sprite: {
                    // Prefix added to sprite id in the spritemap. It will be used for the class/spritename in the generated styles as well.
                    // Default: 'sprite-'
                    prefix: 'sprite-',
                    // Amount of pixels added between each sprite to prevent overlap.
                    // Default: 0
                    gutter: 0,
                    generate: {
                        // Whether to generate a <title> element containing the filename if no title is provided in the SVG.
                        // Default: true
                        title: true,
                        // Generate <symbol> tags within the SVG to use in HTML via <use> tag
                        // Default: true
                        symbol: true,
                        // Generate <use> tags within the spritemap as the <view> tag will use this
                        // Default: false
                        use: true,
                        // Whether to include a <view> element for each sprite within the generated spritemap to allow referencing via fragment identifiers. Passing a string will use the value as a postfix for the id attribute.
                        // Default: false
                        view: '-svg'
                    }
                },
                styles: {
                    // Path to the styles file, note that this method uses the `output.publicPath` webpack option
                    // to generate the path/URL to the spritemap itself so you might have to look into that
                    filename: path.join(__dirname, srcAssetPath, 'sass/generic/_svgsprites.scss'),
                    // Specifiy that we want to use URLs with fragment identifiers in a styles file as well
                    // Format of the styles that will be generated, the following values are valid:
                    // 'data'
                    // Generates data URIs as background url()s.
                    // 'fragment'
                    // Generates URLs with fragment identifiers as background url()s. This requires the sprite.generate.view option to be enabled and uses the webpack option output.publicPath to build a URL to the file. This type of setup requires some additional configuration, see example for more information.
                    // Default: 'data'
                    format: 'fragment',
                    variables: {
                        // Name for the SCSS variable that is used for the Sass map containing sprites.
                        // Default: 'sprites'
                        sprites: 'sprites',
                        // Name for the SCSS variable that is used for the Sass map containing size information for each sprite.
                        // Default: 'sizes'
                        sizes: 'sizes',
                        // Name for the SCSS variable that is used for the Sass map containing user-defined variables.
                        // Default: 'variables'
                        variables: 'variables',
                        // Add custom name for the mixin to make sense
                        // example: @include sprite-svg('phone');
                        // Default: 'sprite'
                        mixin: 'sprite-svg'
                    }
                },
                output: {
                    // Filename of the generated file (located at the webpack output.path), [hash] and [contenthash] are supported.
                    // Default: 'spritemap.svg'
                    filename: 'assets/images/svgsprites.svg',
                    svg: {
                        // Whether to include the width and height attributes on the root SVG element. The default value for this option is based on the value of the sprite.generate.use option but when specified will always overwrite it.
                        sizes: false
                    },
                    chunk: {
                        // Name of the chunk that will be generated.
                        // Default: 'spritemap'
                        name: 'svgsprites',
                        // Whether to keep the chunk after it's been emitted by webpack.
                        // Default: false
                        keep: true
                    },
                    // Whether to include the SVG4Everybody helper in your entries.
                    // false
                    // Don't add the helper.
                    // true
                    // Add the helper with a configuration object of {}.
                    // { ... }
                    // Add the helper with a custom options object.
                    // Default: false
                    svg4everybody: true,
                    // Options object to pass to SVG Optimizer.
                    // false
                    // Disable the optimizer.
                    // true
                    // Enable optimizer with the default SVG Optimizer config.
                    // { ... }
                    // Enable optimizer with a custom options object.
                    // Default: true
                    svgo: true
                }
            })
        ]
    }
})

// Create manifest file for production, sourcemaps for dev
if ( mix.inProduction() ) {
    mix.version()
}
else {
    mix.webpackConfig({ devtool: 'source-map' })
        .sourceMaps()
}

// browserSync Frontend
if(env === 'frontend') {
    mix.browserSync({
        proxy: false,
        server: {baseDir: distPath},
        host: 'localhost',
        port: 8000,
        files: bsFiles
    })
}
// browserSync Development & Production
else {
    mix.browserSync({
        // To view dev & prod build externaly use external IP generated by `npm run fe` IP:8080
        proxy: false,
        host: 'http://localhost',
        port: 8080,
        open: false,
        files: bsFiles
    })
}

mix.options({
    hmrOptions: {
        host: 'local.sitename.com'
    }
})
