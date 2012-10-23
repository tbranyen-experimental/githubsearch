define([
        'Ember',
        'text!templates/application.handlebars'
       ],
function (Ember, template) {
    Ember.TEMPLATES.application = Ember.Handlebars.compile(template);
    GithubSearch.ApplicationView = Ember.View.extend({
        templateName: 'application'
    });
});