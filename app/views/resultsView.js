define([
        'Ember',
        'text!templates/results.handlebars'
       ],
function (Ember, template) {
    Ember.TEMPLATES.results = Ember.Handlebars.compile(template);
    GithubSearch.ResultsView = Ember.View.extend({
        templateName: 'results'
    });
});