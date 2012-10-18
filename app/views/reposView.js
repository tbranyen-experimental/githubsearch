define([
        'Ember',
        'text!templates/repos.handlebars'
       ],
function (Ember, template) {
    Ember.TEMPLATES.repos = Ember.Handlebars.compile(template);

    GSearch.ReposView = Ember.View.extend({
        templateName: 'repos'
    });
});