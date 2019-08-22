const gulp = require('gulp');
const plumber = require('gulp-plumber');
const typescript = require('gulp-typescript');
const tsProject = typescript.createProject('tsconfig.server.json');
const tsSharedProject = typescript.createProject('tsconfig.shared.json');
function shared () {
    return gulp.watch('shared/**/*.ts', function () {
        console.log('watch shared file changed...');
        return tsSharedProject.src().pipe(plumber()).pipe(tsSharedProject()).pipe(gulp.dest('server-dist/shared'));
    });
}
function server () {
    return gulp.watch('server/**/*', function () {
        console.log('watch server file changed...');
        return tsProject.src().pipe(plumber()).pipe(tsProject()).pipe(gulp.dest('server-dist'));
    });
}
exports.default = gulp.parallel(shared, server)