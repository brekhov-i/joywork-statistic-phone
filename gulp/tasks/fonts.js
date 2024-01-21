import {readFileSync, writeFile, readdir, appendFile} from 'fs';
import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
    return app.gulp
        .src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "HTML",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(
            fonter({
                formats: ["ttf"],
            })
        )
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
};

export const ttfToWoff = () => {
    return app.gulp
        .src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "HTML",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(ttf2woff())
        .pipe(app.gulp.dest("./dist/fonts/"))
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {}))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(app.path.build.fonts));

};

export const fontsStyle = (done) => {
    const file_content = readFileSync(`${app.path.srcFolder}/scss/_fonts.scss`);

    writeFile(`${app.path.srcFolder}/scss/_fonts.scss`, "", cb);
    readdir(app.path.build.fonts, function (err, items) {
        if (items) {
            let c_fontname;
            for (var i = 0; i < items.length; i++) {
                let fontname = items[i].split(".");
                fontname = fontname[0];
                let font = fontname.split("-")[0];
                let weight = checkWeight(fontname);
                let fontStyleText = fontname.split("_")[1];
                let fontStyle = checkStyle(fontStyleText);

                if (c_fontname !== fontname) {
                    appendFile(
                        `${app.path.srcFolder}/scss/_fonts.scss`,
                        '@include font-face("' +
                        font +
                        '", "' +
                        fontname +
                        '", ' +
                        weight +
                        ", " +
                        `"${fontStyle}"` +
                        ");\r\n",
                        cb
                    );
                }
                c_fontname = fontname;
            }
        }
    });

    done();
};

const cb = () => {
};

const checkWeight = (fontname) => {
    let weight;
    switch (true) {
        case /Thin/.test(fontname):
            weight = 100;
            break;
        case /ExtraLight/.test(fontname):
            weight = 200;
            break;
        case /Light/.test(fontname):
            weight = 300;
            break;
        case /Regular/.test(fontname):
            weight = 400;
            break;
        case /Medium/.test(fontname):
            weight = 500;
            break;
        case /SemiBold/.test(fontname):
            weight = 600;
            break;
        case /Semi/.test(fontname):
            weight = 600;
            break;
        case /Bold/.test(fontname):
            weight = 700;
            break;
        case /ExtraBold/.test(fontname):
            weight = 800;
            break;
        case /Black/.test(fontname):
            weight = 900;
            break;
        default:
            weight = 400;
    }
    return weight;
};

const checkStyle = (fontStyletext) => {
    let style;
    switch (true) {
        case /Italic/.test(fontStyletext):
            style = "italic";
            break;
        default:
            style = "normal";
    }
    return style;
};

