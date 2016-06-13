var gulp = require('gulp');

var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


//task
gulp.task('sass', function(){
    
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

//watch
gulp.task('watch', ['browserSync', 'sass'] ,function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

//browserSync server
gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});