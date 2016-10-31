/// <reference path="typings/gulp/gulp.d.ts" />
/// <reference path="typings/gulp-typescript/gulp-typescript.d.ts" />
let gulp = require('gulp');
let ts = require('gulp-typescript');

let tsProject = ts.createProject('src/ts/tsconfig.json', {
    out: 'app.js',
});

gulp.task('default', ['build']);

gulp.task('build', ['build:ts']);

gulp.task('build:ts', function() {
    let tsResult = gulp.src('src/ts/**/*.ts')
        .pipe(tsProject());
    tsResult.js.pipe(gulp.dest('dist/js/'));
});
