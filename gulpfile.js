var elixir = require('laravel-elixir')
    gulp = require('gulp')
    connect = require('gulp-connect-php')
    browserSync = require('browser-sync');

// var includePaths = [
//     "bower_components/foundation-sites/scss",
//     "bower_components/motion-ui/src"
// ];

elixir(function(mix) {
   // compile sass
    // mix.sass('app.scss', null, {
    //     includePaths
    // })
    // .sass('style.scss', null, {
    //     includePaths
    // })
    // copy assets needed
    // .copy('bower_components/jquery/dist/jquery.js', 'public/js/jquery.js')
    // .copy('bower_components/foundation-sites/dist/foundation.js', 'public/js/foundation.js')
    // .copy('bower_components/slick-carousel/slick/slick.js', 'public/js/slick.js')
    // .copy('resources/assets/js/app.js', 'public/js/app.js')
    // .copy('resources/assets/fonts', 'public/build/css/fonts')
    // .copy('resources/assets/images', 'public/build/img')
    // combine and version files
    // .version([
    //     'public/js/jquery.js',
    //     'public/js/slick.js',
    //     'public/js/foundation.js',
    //     'public/js/app.js',
    //     'public/css/app.css',
    //     'public/css/style.css'
    // ]);
});

// create a local 
gulp.task("static", function() {
    // create the server
    connect.server({
        port: 3000,
        base: 'resources/static'
    },
    function() {
        browserSync({
            proxy: '127.0.0.1:3000'        
        })
    });

    // listen for any changes
    gulp.watch('resources/static/**/*.html').on('change', function () {
        browserSync.reload();
    });
});