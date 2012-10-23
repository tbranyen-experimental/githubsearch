define([
        'Ember',
        'text!templates/application.handlebars'
       ],
function (Ember, template) {
    Ember.TEMPLATES.application = Ember.Handlebars.compile(template);
<<<<<<< HEAD
    GithubSearch.ApplicationView = Ember.View.extend({
=======
    GSearch.ApplicationView = Ember.View.extend({
>>>>>>> b1cbcef60487a49e15e3670834586252039e4451
        templateName: 'application'
    });
});