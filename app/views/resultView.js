define([
        'Ember',
        'text!templates/result.handlebars'
       ],
function (Ember, template) {
    Ember.TEMPLATES.result = Ember.Handlebars.compile(template);

    GSearch.ResultView = Ember.View.extend({
        templateName: 'result'
    });
});