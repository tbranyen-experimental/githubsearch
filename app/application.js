<<<<<<< HEAD
define([
        'Ember'
       ],
function (Ember) {
    var GithubSearch = window.GithubSearch = Ember.Application.create();
=======
define(
    [
        'Ember'
    ],
function (Ember) {
    var GSearch = window.GSearch = Ember.Application.create();
>>>>>>> b1cbcef60487a49e15e3670834586252039e4451

    require(['router'], function (Router) {
        var router = Router.create({
            location: 'hash'
        });

<<<<<<< HEAD
        GithubSearch.initialize(router);
=======
        GSearch.initialize(router);
>>>>>>> b1cbcef60487a49e15e3670834586252039e4451
    });
});