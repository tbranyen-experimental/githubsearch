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
                },

                serialize: function (router, context) {
                    return {
                        queryTerm: context
                    };
                },

                deserialize: function (router, params) {
                    return params.queryTerm;
                }
            })

        })
    });

    return router;
});