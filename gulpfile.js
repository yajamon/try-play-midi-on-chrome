/// <reference path="typings/gulp/gulp.d.ts" />
/// <reference path="typings/gulp-typescript/gulp-typescript.d.ts" />
let gulp = require('gulp');
let ts = require('gulp-typescript');

let paths = {
    src: {
        html: 'src/html/**/*.html',
        ts: 'src/ts/**/*.ts',
    },
    dist: {
        html: 'dist/html/',
        js: 'dist/js/',
    },
};

let tsProject = ts.createProject('src/ts/tsconfig.json', {
    out: 'app.js',
});

gulp.task('default', ['build']);

gulp.task('build', ['build:ts', 'build:html']);

gulp.task('build:ts', function() {
    let tsResult = gulp.src(paths.src.ts)
        .pipe(tsProject());
    tsResult.js.pipe(gulp.dest(paths.dist.js));
});

gulp.task('build:html', function() {
    gulp.src(paths.src.html)
        .pipe(gulp.dest(dist.html));
});
