var gulp = require('gulp');
var requireDir = require('require-dir')
var browserSync = require('browser-sync').create();

var tasks = requireDir('./tasks')

gulp.task('transcompilerJS', function(){tasks.testeInject.transcompilerJS()})

gulp.task('injectJSAndCss', function(){tasks.testeInject.injectJSAndCss()})

gulp.task('concatSass', function(){tasks.testeInject.concatSass()})

gulp.task('update', ['concatSass', 'transcompilerJS','injectJSAndCss'])

gulp.task('server', function() {
    browserSync.init({
       
        server:{
            startPath: '/',
            baseDir: ['./.tmp/server', './public/src/'],
            ghostMode: false,
            routes: {
                "/bower_components": "bower_components",   
           },
        },
        open: false,
    });

    gulp.watch(["public/**/*.ts", "public/**/*.html", "public/**/*.sass"], ['update']).on("change", browserSync.reload);
})