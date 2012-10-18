define([
        'Ember',
        'text!templates/repo.handlebars'
       ],
function (Ember, template) {
    Ember.TEMPLATES.repo = Ember.Handlebars.compile(template);

    GSearch.RepoView = Ember.View.extend({
        templateName: 'repo'
    });
});