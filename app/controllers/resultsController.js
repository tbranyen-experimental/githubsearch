define([
        'Ember'
       ],
function (Ember) {
    GithubSearch.ResultsController = Ember.ArrayController.extend({
        fetch: function (queryTerm) {
            $.getJSON('/_api/search/repos/', { term: queryTerm }, $.noop).done($.proxy(this, 'load'));
        },

        load: function (response) {
            this.set('content', response.repositories);
        }
    });
});