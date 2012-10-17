define([
        'Ember',
        'text!templates/application.handlebars'
       ],
function (Ember, template) {
    Ember.TEMPLATES.application = Ember.Handlebars.compile(template);
    GSearch.ApplicationView = Ember.View.extend({
        templateName: 'application'
    });
});