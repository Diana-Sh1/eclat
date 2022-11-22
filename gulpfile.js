//основной модуль
import gulp from "gulp";
//Импорт путей
import { path } from "./gulp/config/path.js";
//Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";




//test
import ghPages from "gulp-gh-pages";
gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});
//---
// import deploy from "gulp-gh-pages";
// gulp.task('deploy', function() {
//     return gulp.src('./dist/**/*')
//         .pipe(deploy({
//             getRemoteUrl: "https://github.com/Diana-Sh1/Diana-Sh1.github.io.git",
//             branch: "reserve"
//             })
//         );
// });



global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

//импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
// import { plugins } from "./gulp/config/plugins.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { oftToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

//наблюдатель за изменением в файлах
function watcher() {
    gulp.watch(path.watch.files, copy); //чтобы автоматом выгружалось на ftp вставить вместо последнего - gulp.series.(html, ftp)
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export { svgSprive }

//последовательная обработка шрифтов
const fonts = gulp.series(oftToTtf, ttfToWoff, fontsStyle);

//основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

//построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, watcher);
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

//экспорт сценариев
export { dev }
export { build }
export { deployZIP }
export { deployFTP }

//выполнение сценария по умолчанию
gulp.task('default', dev);