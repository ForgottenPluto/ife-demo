/**
 * Created by Administrator on 2017/6/2.
 */
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    cssmin = require('gulp-minify-css'), //css压缩
    browserSync = require("browser-sync").create(),
    autoprefixer = require('gulp-autoprefixer'),//补前缀
    reload = browserSync.reload;



/**
 * 补前缀
 */
gulp.task('testAutoFx', function () {
    gulp.src('assets/less/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('assets/css'));
});

/**
 * css压缩任务
 */
gulp.task('minCss', function () {
    gulp.src('assets/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('assets/dist/css'))
});

/**
 * 监听css文件，当src/css/下所有css文件发生改变时，调用minCss任务
 */
gulp.task('WatchCss', function () {
    gulp.watch('assets/css/*.css', ['minCss']);
});

/**
 * 监听less文件，当src／less下所有的less文件发生改变时，调用Less任务
 */
gulp.task('Watch', function () {
    gulp.watch('assets/*.less', ['Less']); //当所有less文件发生改变时，调用testLess任务
});


gulp.task('default', [ 'Watch', 'minCss', 'WatchCss','testAutoFx',]); //定义默认任务   只需要开启默认任务就可以