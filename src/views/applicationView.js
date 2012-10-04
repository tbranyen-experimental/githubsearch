/*global define, Ember, GithubSearch*/
define([
        "Ember",
        "text!templates/application.handlebars"
       ],
function (Ember, template) {
    "use strict";
    Ember.TEMPLATES.application = Ember.Handlebars.compile(template);

    GithubSearch.ApplicationView = Ember.ContainerView.extend({
        templateName: "githubsearch-application"
    });
});