var gulp = require('gulp');
var path = require('path')
var inject = require('gulp-inject')
var ts = require('gulp-typescript');
var wiredep = require('wiredep').stream
var concat = require('gulp-concat');
var _ = require('lodash')

var optionsWiredep = {
  directory: 'bower_components',
}

var injectOptions = {
  ignorePath: ['src', path.join('.tmp', '/server')],
  addRootSlash: false
};

module.exports = 
{
  transcompilerJS: function()
    {
      return gulp.src(
        [
          '!./**/*.html',
          './public/src/directives/teste.module.ts',
          './public/src/directives/routes.module.ts',
          './public/src/directives/**/*.ts',
        ]
      )
      .pipe(ts({noImplicitAny: true,outFile: 'app.js'}))
      .pipe(gulp.dest('./.tmp/server'))
    },

    injectJSAndCss: function()
    {
      setTimeout(() => {
        var injectJs = gulp.src(['./.tmp/server/app.js'],{read: true})

        var css = gulp.src(['./.tmp/server/main.css'],{read: true})
        
          return gulp.src(['./public/app/index.html'])
          .pipe(wiredep(_.extend({}, optionsWiredep)))
          .pipe(inject(injectJs, injectOptions))
          .pipe(inject(css, injectOptions))
          .pipe(gulp.dest('./.tmp/server'))
      }, 4000);
     
    
    },

    concatSass: function()
    {
      return gulp.src(['./public/**/*.sass'])
      .pipe(concat('main.css'))
      .pipe(gulp.dest('./.tmp/server'))
    },
  }


