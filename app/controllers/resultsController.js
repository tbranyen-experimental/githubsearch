define([
        'Ember',
        '../models/repo'
       ],
function (Ember) {
    GithubSearch.ResultsController = Ember.ArrayController.extend({
        repos: Ember.A(),

        fetch: function (queryTerm) {
            $.getJSON('/_api/search/repos/', { term: queryTerm }, $.noop).done($.proxy(this, 'load'));
        },

        load: function (response) {
            this.addRepos(response.repositories);
            this.set('content', this.repos);
        },

        addRepos: function (data) {
            for (var i = 0, l = data.length; i < l; i++) {
                this.addRepo(data[i]);
            }
        },

        addRepo: function (data) {
            var r = GithubSearch.Repo.create();
            r.setProperties(data);
            this.repos.push(r);
        }
    });
});