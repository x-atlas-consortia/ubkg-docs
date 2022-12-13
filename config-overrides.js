const path = require('path');
module.exports = {
    paths: function (paths, env) {
        // Changing public to static
        paths.appPublic = path.resolve(__dirname, 'docs');
        paths.appHtml = path.resolve(__dirname, 'docs/index.html');
        return paths;
    }
}