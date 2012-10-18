var search = require('octonode'),
    _      = require('underscore'),
    fs      = require('fs'),
    server = require('express').createServer();

module.exports = function (options) {
    options = _.extend({
        port: 9999,
        tests: true,
        baseDir: './'
    }, options || {});

    server.get('/', function (request, response) {
        fs.createReadStream(options.baseDir + 'app/index.html').pipe(response);
    });

    server.listen(options.port || null);
    console.log("Running at http://localhost:" + (options.port || ''));
};
