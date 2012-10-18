define([
        'Ember'
       ],
function (Ember) {
    GSearch.ReposController = Ember.ArrayController.extend({
        fetch: function (query) {
            console.log('search for: ' + query);
            var request = $.getJSON('/_api/search/repos/', { term: query}, $.noop);
            request.done($.proxy(this, 'load'));
        },

        load: function (response) {
            console.log('response: ' + response);
            this.set('content', response);
        }
    });
});