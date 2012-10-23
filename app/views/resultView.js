define([
        'Ember',
        'text!templates/result.handlebars'
       ],
function (Ember, template) {
    Ember.TEMPLATES.result = Ember.Handlebars.compile(template);
<<<<<<< HEAD
    GithubSearch.ResultView = Ember.View.extend({
=======

    GSearch.ResultView = Ember.View.extend({
>>>>>>> b1cbcef60487a49e15e3670834586252039e4451
        templateName: 'result'
    });
});