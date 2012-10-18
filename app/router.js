define(
    [
        'Ember',

        './controllers/applicationController',
        './controllers/searchBoxController',
        './controllers/recentSearchesController',

        './views/applicationView',
        './views/searchBoxView',
        './views/recentSearchesView'
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

                    applicationController.connectOutlet({
                        outletName: 'recentSearches',
                        name: 'recentSearches'
                    });
                }
            }),

            search: function(router) {
                var query = router.get('searchBoxController.term');
                router.transitionTo('results', query);
            },

            results: Ember.Route.extend({
                route: '/seach/:query',

                connectOutlets: function (router, query) {
                    var applicationController = router.get('applicationController');
                    applicationController.connectOutlet('repos');
                    router.get('reposController').fetch(query);
                },

                serialize: function (router, context) {
                    return {
                        query: context
                    };
                },

                deserialize: function (router, params) {
                    return params.query;
                }
            })
        })
    });
    return router;
});