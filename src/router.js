/*global define, Ember*/
define([
        "Ember",
        "controllers/applicationController",
        "controllers/issueController",
        "controllers/repoController",
        "controllers/userController",

        "views/applicationView"
       ],
function (Ember) {
    "use strict";

    var router = Ember.Router.extend({
        enableLogging: true,
        root: Ember.Route.extend({
            index: Ember.Route.extend({
                route: "/"
            }),
            search: Ember.Route.extend({
                route: "/search/:query"
            })
        })
    });

    return router;
});