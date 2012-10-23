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