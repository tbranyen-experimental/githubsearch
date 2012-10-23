<<<<<<< HEAD
define([
        'Ember'
       ],
function (Ember) {
    GithubSearch.ResultsController = Ember.ArrayController.extend({
        fetch: function (queryTerm) {
            $.getJSON('/_api/search/repos/', { term: queryTerm }, $.noop).done($.proxy(this, 'load'));
=======
define(function () {
    GSearch.ResultsController = Ember.ArrayController.extend({
        fetch: function (query) {
            $.getJSON('/_api/search/repos/', { term: query }, $.noop).done($.proxy(this, 'load'));
>>>>>>> b1cbcef60487a49e15e3670834586252039e4451
        },

        load: function (response) {
            this.set('content', response.repositories);
        }
    });
});