define([
        'Ember',
        'text!templates/search.handlebars'
       ],
function (Ember, template) {
    Ember.TEMPLATES.search = Ember.Handlebars.compile(template);
    GithubSearch.SearchView = Ember.View.extend({
        templateName: 'search'
    });
});