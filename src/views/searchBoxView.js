define([
        'Ember',
        'text!templates/searchBox.handlebars'
       ],
function (Ember, template) {
    Ember.TEMPLATES.searchBox = Ember.Handlebars.compile(template);
    GSearch.SearchBoxView = Ember.View.extend({
        templateName: 'searchBox'
    });
});