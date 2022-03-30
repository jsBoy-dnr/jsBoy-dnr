const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const pug = require('gulp-pug');

gulp.task('pug', function() {
    return gulp.src("app/pug/*.pug", '!./src/includes/**/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest("app"))
    
    .pipe(browserSync.stream());
});

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: "app"
        }
    });   
});

gulp.task('styles', function() {
    return gulp.src("app/scss/**/*.+(scss|sass)")
        .pipe(sass().on('error', sass.logError))
      //  .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());        
});

gulp.task('watch', function() {
    gulp.watch("app/scss/**/*.+(scss|sass)", gulp.parallel('styles'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/**/*.pug",gulp.parallel('pug'));
});

gulp.task('default', gulp.parallel('watch', 'pug', 'server', 'styles'));