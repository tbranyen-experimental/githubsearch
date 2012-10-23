define([
        'Ember'
       ],
function (Ember) {
    var GithubSearch = window.GithubSearch = Ember.Application.create();

    require(['router'], function (Router) {
        var router = Router.create({
            location: 'hash'
        });

        GithubSearch.initialize(router);
    });
});