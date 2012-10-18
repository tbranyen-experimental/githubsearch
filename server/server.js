var search          = require('octonode').client(),
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

    server.get('/_api/search/repos/:repo', function (request, response) {
        search.get('/legacy/repos/search/' + request.params.repo, function (error, status, data) {
            response.end(JSON.stringify(data));
        });
    });

    server.get('/_api/search/users/:user', function (request, response) {
        search.get('/users/' + request.params.user, function (error, status, data) {
            response.end(JSON.stringify(data));
        });
    });

    server.get('/_api/search/:user/:repo/issues', function (request, response) {
        search.get('/repos/' + request.params.user + '/' + request.params.repo + '/issues', function (error, status, data) {
            response.end(JSON.stringify(data));
        });
    });

    server.get('/_api/search/:user/:repo/pulls', function (request, response) {
        search.get('/repos/' + request.params.user + '/' + request.params.repo + '/pulls', function (error, status, data) {
            response.end(JSON.stringify(data));
        });
    });

    server.listen(options.port || null);
    console.log("Running at http://localhost:" + (options.port || ''));
};
