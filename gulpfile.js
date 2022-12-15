var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require("gulp-concat");
var plumber = require("gulp-plumber");
const pug = require('gulp-pug')
const lang = require('./src/lang/en.json')

function js(cb) {
    return gulp.src(
        [
            'node_modules/babel-polyfill/dist/polyfill.js',
            'src/js/*.js'
        ])
        .pipe(plumber())
        .pipe(concat("main.js"))
        .pipe(babel({
            presets:
                [
                    [
                        "@babel/preset-env",
                        {
                            modules: false,
                        }
                    ],
                ]
        }))
        .pipe(gulp.dest('docs/js'))
}
gulp.task('js', js);

function html() {
    return gulp.src('./src/pug/layouts/*.pug')
        .pipe(
            pug({
                pretty: true,
                locals: {
                    _t: lang
                }
            })
        )
        .pipe(gulp.dest('./docs/_layouts/'));
}
gulp.task('html', html);

exports.default = function() {
    // You can use a single task
    gulp.watch('src/pug/**/*.pug', html);
    // Or a composed task
    gulp.watch('src/js/*.js', js);
};

