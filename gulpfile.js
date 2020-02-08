var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

function sassToCss(done) {
    gulp
        .src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css/'));
        done();
}


function watchFiles () {
    gulp.watch('src/scss/**/*.scss', sassToCss);
}

gulp.task('default', watchFiles);

// gulp.task(sync);