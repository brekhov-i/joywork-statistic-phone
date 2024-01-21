import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import fileInclude from "gulp-file-include";
// import pug from "gulp-pug";

export const html = () => {
  return (
    app.gulp
      .src(["./src/index.html"])
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>",
          })
        )
      )
      .pipe(app.plugins.replace(/@html\//g, "./html/"))
      .pipe(fileInclude({
          context: {
              isBuild: app.isBuild
          }
      })) //- только для HTML, для PUG  отключаем
      // .pipe(
      //   app.plugins.if(
      //     app.isBuild,
      //     pug({
      //       //Cжатие html файлов
      //       pretty: true,
      //       //Показывает в терминале какой файл обработан
      //       verbose: true,
      //     }),
      //     pug({
      //       //Показывает в терминале какой файл обработан
      //       verbose: true,
      //     })
      //   )
      // )
      .pipe(app.plugins.replace(/@css\//g, "./css/"))
      .pipe(app.plugins.replace(/@files\//g, "./files/"))
      .pipe(app.plugins.replace(/@img\//g, "./img/"))
      .pipe(app.plugins.replace(/@js\//g, "./js/"))
      .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
      .pipe(
        app.plugins.if(
          app.isBuild,
          versionNumber({
            value: "%DT%",
            append: {
              key: "_v",
              cover: 0,
              to: ["css", "js"],
            },
            output: {
              file: "gulp/version.json",
            },
          })
        )
      )
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browsersync.stream())
  );
};
