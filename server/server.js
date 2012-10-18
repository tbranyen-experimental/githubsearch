var search          = require('octonode'),
    express         = require('express'),
    _               = require('underscore'),
    fs              = require('fs'),
    server          = require('express').createServer(),
    staticDirectory = express['static'];

module.exports = function (options) {
    options = _.extend({
        port: 9999,
        tests: true,
        baseDir: './'
    }, options || {});

    server.configure(function () {
        ['app', 'assets', 'tests'].forEach(function (directory) {
            server.use(
                    '/' + directory,
                    staticDirectory(options.baseDir + directory)
            );
        });
        server.use(express.bodyParser());
    });

    server.get('/', function (request, response) {
        fs.createReadStream(options.baseDir + 'app/index.html').pipe(response);
    });

    server.listen(options.port || null);
    console.log("Running at http://localhost:" + (options.port || ''));
};
