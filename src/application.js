define(
    [
        'Ember'
    ],
function (Ember) {
    var GSearch = window.GSearch = Ember.Application.create();

    require(['router'], function (Router) {
        var router = Router.create({
            location: 'hash'
        });

        GSearch.initialize(router);
    });
});