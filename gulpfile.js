const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const lang = require('./src/lang/en.json')
const stylus = require('gulp-stylus')

function js(cb) {
    return gulp
        .src(['node_modules/babel-polyfill/dist/polyfill.js', 'src/js/*.js'])
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(
            babel({
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            modules: false
                        }
                    ]
                ]
            })
        )
        .pipe(gulp.dest('docs/js'))
}

gulp.task('js', js)

function html() {
    return gulp
        .src('./src/pug/layouts/*.pug')
        .pipe(
            pug({
                pretty: true,
                locals: {
                    _t: lang
                }
            })
        )
        .pipe(gulp.dest('./docs/_layouts/'))
}

gulp.task('html', html)

function css() {
    return gulp
        .src('./css/compressed.styl')
        .pipe(
            stylus({
                compress: true
            })
        )
        .pipe(gulp.dest('./css/build'))
}

gulp.task('css', css)

exports.default = function () {
    gulp.watch('src/pug/**/*.pug', html)
    gulp.watch('src/js/*.js', js)
    gulp.watch('src/styles/**/*.styl', css)
}
