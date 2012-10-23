define([
        'Ember',
        'text!templates/result.handlebars'
       ],
function (Ember, template) {
    Ember.TEMPLATES.result = Ember.Handlebars.compile(template);
    GithubSearch.ResultView = Ember.View.extend({
        templateName: 'result'
    });
});