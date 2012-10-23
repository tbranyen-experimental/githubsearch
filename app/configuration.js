requirejs.config({
    deps: ['application'],
    paths: {
        templates: './templates',
        Ember: 'libs/ember',
        Handlebars: 'libs/handlebars',
        jQuery: 'libs/jquery',
        text: 'libs/text',
        moment: 'libs/moment'
    },
    shim: {
        Handlebars: {
            exports: 'Handlebars'
        },
        Ember: {
            deps: ['jQuery', 'Handlebars'],
            exports: 'Ember'
        }
    }
});