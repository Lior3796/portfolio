const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const buildStyles = () => {
	return src(["styles/**/*.scss"]).pipe(sass()).pipe(dest("styles/css-styles"));
};
const watchTask = () => {
	watch(["styles/**/*.scss"], buildStyles);
};

exports.default = series(buildStyles, watchTask);
