define(function () {
    GSearch.ResultsController = Ember.ArrayController.extend({
        fetch: function (query) {
            $.getJSON('/_api/search/repos/', { term: query }, $.noop).done($.proxy(this, 'load'));
        },

        load: function (response) {
            this.set('content', response.repositories);
        }
    });
});