const gulp = require('gulp');
const plumber = require('gulp-plumber');
const typescript = require('gulp-typescript');
const tsProject = typescript.createProject('tsconfig.server.json');
gulp.task('default', function () {
    return gulp.watch('server/**/*', function () {
        console.log('watch file changed...');
        return tsProject.src().pipe(plumber()).pipe(tsProject()).pipe(gulp.dest('server-dist'));
        // return tsProject.src().pipe(plumber()).pipe(tsProject());
    });
});
