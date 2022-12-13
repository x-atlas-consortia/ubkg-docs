const path = require('path');
module.exports = {
    paths: function (paths, env) {
        console.log(paths)
        paths.appPublic = path.resolve(__dirname, 'docs');
        paths.appHtml = path.resolve(__dirname, 'src/index.html');
        return paths;
    }
}