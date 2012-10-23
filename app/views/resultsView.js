define([
        'Ember',
        'text!templates/results.handlebars'
       ],
function (Ember, template) {
    Ember.TEMPLATES.results = Ember.Handlebars.compile(template);
<<<<<<< HEAD
    GithubSearch.ResultsView = Ember.View.extend({
=======

    GSearch.ResultsView = Ember.View.extend({
>>>>>>> b1cbcef60487a49e15e3670834586252039e4451
        templateName: 'results'
    });
});