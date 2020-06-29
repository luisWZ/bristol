const fs = require('fs');
const concat = require('concat');
const cleanCss = require('clean-css');

const pack = require('./package.json');

const throwErr = function(err, message) {
    if (err) throw err;
    if (message !== undefined) console.log(message);
};

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

// Making css file
fs.mkdirSync(`${pack.buildDir}/css`, { recursive: true }, err => throwErr(err));
concat(cssFiles)
    .then(source => {
        new cleanCss({ returnPromise: true })
            .minify(source)
            .then(result => {
                if (result.errors.length > 0) console.log('There are some erros in the minifying');
                fs.writeFile(`${pack.buildDir}/css/project.min.css`, result.styles, err => throwErr(err, 'Todo bien papi ⚡'));
            })
            .catch(err => throwErr(err));
    });

// url(../webfonts/fa-brands-400.woff)