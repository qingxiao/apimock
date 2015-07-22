var gulp = require('gulp');
var babel = require('gulp-babel');

//es6->5
gulp.task('babel', function () {
    gulp.src(['source/**/*.*', '!source/**/*.js'])
        .pipe(gulp.dest('static'));
    return gulp.src(['source/**/*.js'])
        .pipe(babel({
            modules:'amd',
            moduleRoot:'source',
            ignore:['source/js/lib/*.*', 'source/js/app.js', 'source/js/plugins/**/*.*']
        }))
        .pipe(gulp.dest('static'));
});

gulp.task('w', function(){
    "use strict";
    gulp.start('babel');
    gulp.watch('source/**/*.js',['babel']);
});