<<<<<<< HEAD
define([
        'Ember',

        './controllers/applicationController',
        './controllers/searchController',
        './controllers/resultsController',

        './views/applicationView',
        './views/searchView',
        './views/resultView',
        './views/resultsView'
       ],
function (Ember) {
    var router = Ember.Router.extend({
        enableLogging: true,

        root: Ember.Route.extend({

            connectOutlets: function (router) {
                Ember.run.next(function () {
                    router.get('applicationController').connectOutlet({
                        outletName: 'search',
                        name: 'search'
                    });
                });
            },

            search: function (router) {
                router.transitionTo('results', router.get('searchController.queryTerm'));
            },

            index: Ember.Route.extend({
                route: '/'
            }),

            results: Ember.Route.extend({
                route: '/search/:queryTerm',

                connectOutlets: function (router, queryTerm) {
                    router.get('applicationController').connectOutlet('results');
                    router.get('resultsController').fetch(queryTerm);
=======
define(
    [
        'Ember',

        './controllers/applicationController',
        './controllers/recentSearchesController',
        './controllers/resultsController',
        './controllers/searchBoxController',

        './views/applicationView',
        './views/recentSearchesView',
        './views/resultView',
        './views/resultsView',
        './views/searchBoxView'
    ],
function (Ember) {
    var router = Ember.Router.extend({
        root: Ember.Route.extend({
            enableLogging: true,

            index: Ember.Route.extend({
                route: '/',
                connectOutlets: function (router) {
                    var applicationController = router.get('applicationController');

                    applicationController.connectOutlet({
                        outletName: 'searchBox',
                        name: 'searchBox'
                    });
                }
            }),

            search: function(router) {
                var query = router.get('searchBoxController.term');
                router.transitionTo('results', query);
            },

            results: Ember.Route.extend({
                route: '/search/:query',

                connectOutlets: function (router, query) {
                    var applicationController = router.get('applicationController');
                    applicationController.connectOutlet('results');
                    router.get('resultsController').fetch(query);
>>>>>>> b1cbcef60487a49e15e3670834586252039e4451
                },

                serialize: function (router, context) {
                    return {
<<<<<<< HEAD
                        queryTerm: context
=======
                        query: context
>>>>>>> b1cbcef60487a49e15e3670834586252039e4451
                    };
                },

                deserialize: function (router, params) {
<<<<<<< HEAD
                    return params.queryTerm;
                }
            })

        })
    });

=======
                    return params.query;
                }
            })
        })
    });
>>>>>>> b1cbcef60487a49e15e3670834586252039e4451
    return router;
});