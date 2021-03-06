/// <reference path="node_modules/@types/gulp/index.d.ts" />
/// <reference path="node_modules/@types/gulp-typescript/index.d.ts" />
let gulp = require('gulp');
let ts = require('gulp-typescript');
let del = require('del');

let paths = {
    src: {
        html: 'src/html/**/*.html',
        ts: 'src/ts/**/*.{ts,tsx}',
        vendor: [
            'node_modules/requirejs/require.js',
            'node_modules/react/dist/react.js',
            'node_modules/react-dom/dist/react-dom.js',
        ],
    },
    dist: {
        html: 'dist/html/',
        js: 'dist/js/',
        vendor: 'dist/vendor/',
    },
};

let tsProject = ts.createProject('src/ts/tsconfig.json', {
});

gulp.task('clean', function(){
    del([
        paths.dist.js,
        paths.dist.html,
        paths.dist.vendor,
    ]);
});

gulp.task('default', ['build']);

gulp.task('build', ['build:ts', 'build:html', 'build:vendor']);

gulp.task('watch', ['watch:ts', 'watch:html']);

// sub tasks

gulp.task('build:ts', function() {
    let tsResult = gulp.src(paths.src.ts)
        .pipe(tsProject());
    tsResult.js.pipe(gulp.dest(paths.dist.js));
});

gulp.task('build:html', function() {
    gulp.src(paths.src.html)
        .pipe(gulp.dest(paths.dist.html));
});

gulp.task('build:vendor', function() {
    paths.src.vendor.forEach(libPath =>{
        gulp.src(libPath)
            .pipe(gulp.dest(paths.dist.vendor));
    });
});

gulp.task('watch:ts', function() {
    gulp.watch(paths.src.ts, ['build:ts']);
});

gulp.task('watch:html', function() {
    gulp.watch(paths.src.html, ['build:html']);
});
