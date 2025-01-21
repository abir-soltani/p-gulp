import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';

const sassCompiler = gulpSass(sass);

gulp.task('styles', () => {
  return gulp
    .src('src/scss/**/*.scss') // Chemin source
    .pipe(sassCompiler().on('error', sassCompiler.logError)) // Compilation SCSS -> CSS
    .pipe(autoprefixer()) // Ajout des préfixes CSS
    .pipe(cleanCSS()) // Minification du CSS
    .pipe(rename({ suffix: '.min' })) // Ajout du suffixe .min
    .pipe(gulp.dest('dist/css')); // Dossier de sortie
});

gulp.task('default', gulp.series('styles'));

