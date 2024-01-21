import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import {webpackConfig} from '../config/webpack.config.js';
import named from "vinyl-named";

export const js = () => {
    return app.gulp
        .src(app.path.src.js)
        .pipe(app.plugins.if(app.isWp, named()))
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(app.gulp.dest(app.path.build.js));
}