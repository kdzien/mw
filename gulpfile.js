const gulp = require('gulp');  
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');  
const browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

gulp.task('sass', function () {
    return gulp.src('./styles/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./styles/css'))
  });
gulp.task('scripts', ()=> {  
    return gulp.src('./scripts/*.js')
    .pipe(browserSync.stream());
  });
gulp.task('html',()=>{  
    return gulp.src('*.html')
    .pipe(browserSync.stream());
})
gulp.task('mergecss',()=>{
    return gulp.src('./styles/css/*.css')
    .pipe(minifyCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./styles/dist/'))
    .pipe(browserSync.stream());
})

gulp.task('watch',()=> {  
    browserSync.init({
        server: "./"
    });
    gulp.watch('./styles/sass/*.scss', ['sass']);
    gulp.watch('./scripts/*.js', ['scripts']);
    gulp.watch('./styles/css/*.css', ['mergecss']);
    gulp.watch('*.html', ['html']);
});

gulp.task('serve', ['watch']);  