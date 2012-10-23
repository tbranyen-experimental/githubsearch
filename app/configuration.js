requirejs.config({
    deps: ['application'],
    paths: {
        templates: './templates',
        Ember: 'libs/ember',
        Handlebars: 'libs/handlebars',
        jQuery: 'libs/jquery',
        text: 'libs/text'
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