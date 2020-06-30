const fs = require('fs').promises;
const { readFileSync } = require('fs');

const concat = require('concat');
const cleanCss = require('clean-css');
const uglifyJs = require('uglify-js');

const { name, buildDir } = require('./package.json');

const cssFiles = [
    'main-files/assets/css/bootstrap.min.css',
    'main-files/assets/css/jquery-ui.css',
    'main-files/assets/css/sm-core-css.css',
    'main-files/assets/css/sm-simple.css',
    'main-files/assets/css/font-awesome.min.css',
    'main-files/assets/css/flaticon/flaticon.css',
    'main-files/assets/css/owl.carousel.min.css',
    'main-files/assets/css/owl.theme.default.min.css',
    'main-files/assets/css/jquery.fancybox.min.css',
    'main-files/assets/css/animate.css',
    'main-files/assets/css/style.css',
    'main-files/assets/fonts/fontawesome-5/css/all.min.css',
];

(async function uglifyingCss() {
    try {
        await fs.mkdir(`${buildDir}/css`, { recursive: true });
        const source = await concat(cssFiles);
        const bundle = await new cleanCss({ returnPromise: true }).minify(source);
        if (bundle.errors.length > 0) console.error(bundle.errors);
        await fs.writeFile(`${buildDir}/css/${name}.min.css`, bundle.styles);
        console.log('Ahí va el css lord ⚡');
    } catch(error) {
        console.error(error);
    }
})();

const jsFiles = {
    'jquery.js': readFileSync('main-files/assets/js/jquery-3.2.0.min.js', 'utf8'),
    'jquery-ui.js': readFileSync('main-files/assets/js/jquery-ui.js', 'utf8'),
    'jquery.smartmenus.js': readFileSync('main-files/assets/js/jquery.smartmenus.min.js', 'utf8'),
    'owl.carousel.js': readFileSync('main-files/assets/js/owl.carousel.min.js', 'utf8'),
    'OwlCarousel2Thumbs.js': readFileSync('main-files/assets/js/OwlCarousel2Thumbs.min.js', 'utf8'),
    'jquery.counterup.js': readFileSync('main-files/assets/js/jquery.counterup.min.js', 'utf8'),
    'countdown.js': readFileSync('main-files/assets/js/countdown.js', 'utf8'),
    'jquery.scrollUp.js': readFileSync('main-files/assets/js/jquery.scrollUp.js', 'utf8'),
    'jquery.waypoints.js': readFileSync('main-files/assets/js/jquery.waypoints.min.js', 'utf8'),
    'shuffle.js': readFileSync('main-files/assets/js/shuffle.min.js', 'utf8'),
    'jquery.fancybox.js': readFileSync('main-files/assets/js/jquery.fancybox.min.js', 'utf8'),
    'fontawesome.js': readFileSync('main-files/assets/fonts/fontawesome-5/js/all.min.js', 'utf8'),
    'wow.js': readFileSync('main-files/assets/js/wow.min.js', 'utf8'),
    'typed.js': readFileSync('main-files/assets/js/typed.js', 'utf8'),
    'bootstrap.js': readFileSync('main-files/assets/js/bootstrap.min.js', 'utf8'),
    'theme.js': readFileSync('main-files/assets/js/theme.js', 'utf8'),
};

(async function uglifyingJs() {
    try {
        // await fs.mkdir('main-files/build', { recursive: true });
        const source = uglifyJs.minify( jsFiles, { toplevel: true });
        const bundle = await fs.writeFile(`${buildDir}/js/${name}.min.js`, source.code);
        console.log('js bundle listo papi ⚡');
    } catch(error) {
        console.error(error);
    }
})();











// fs.mkdirSync(`${pack.buildDir}/css`, { recursive: true }, err => throwErr(err));
// concat(cssFiles)
//     .then(source => {
//         new cleanCss({ returnPromise: true })
//             .minify(source)
//             .then(result => {
//                 if (result.errors.length > 0) console.log('There are some erros in the minifying');
//                 fs.writeFile(`${pack.buildDir}/css/project.min.css`, result.styles, err => throwErr(err, 'Todo bien papi ⚡'));
//             })
//             .catch(err => throwErr(err));
//     });
// url(../webfonts/fa-brands-400.woff)