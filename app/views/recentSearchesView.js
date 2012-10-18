define([
        'Ember',
        'text!templates/recentSearches.handlebars'
       ],
function (Ember, template) {
    Ember.TEMPLATES.recentSearches = Ember.Handlebars.compile(template);
    GSearch.RecentSearchesView = Ember.View.extend({
        templateName: 'recentSearches'
    });
});