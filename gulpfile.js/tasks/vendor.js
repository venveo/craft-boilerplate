var config = require('../config')
if (!config.tasks.vendor) return

var gulp = require('gulp')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var handleErrors = require('../lib/handleErrors')
var autoprefixer = require('gulp-autoprefixer')
var path = require('path')
var cssnano = require('gulp-cssnano')
var bower = require('main-bower-files')
var filter = require('gulp-filter')
var concat = require('gulp-concat')
var rename = require("gulp-rename")

var dist = {
    all: path.resolve(config.root.dest, '**/*'),
    css: path.resolve(config.root.dest, config.tasks.vendor.dest.css),
    js: path.resolve(config.root.dest, config.tasks.vendor.dest.js),
    fonts: path.resolve(config.root.dest, config.tasks.vendor.dest.fonts)
}

var vendorTask = function () {

    var jsFilter = filter(['**/*.js'], {restore: true});
    var cssFilter = filter(['**/*.css'], {restore: true});

    return gulp.src(bower({
        paths: {
            bowerDirectory: 'bower_components',
            bowerrc: '.bowerrc',
            bowerJson: 'bower.json'
        }
    }))
        .pipe(jsFilter)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(dist.js))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(dist.css))
        .pipe(cssFilter.restore)
}


gulp.task('vendor', vendorTask)
module.exports = vendorTask
