/*global define, Ember*/
define([
        "Ember",
        "router"
       ],
function (Ember, Router) {
    "use strict";
    var GithubSearch = window.GithubSearch = Ember.Application.create({
        version: "0.0.1",
        rootElement: "#search-results",
        storeNamespace: "ember-githubsearch",
        ApplicationController: Ember.Controller.extend(),
        ready: function () {
            this.initialize(Router.create({
                location: "hash"
            }));
        }
    });
});