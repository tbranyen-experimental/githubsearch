requirejs.config({
    deps: ['application'],
    paths: {
        templates: './templates',
        Ember: 'libs/ember',
        Handlebars: 'libs/handlebars',
        jQuery: 'libs/jquery',
<<<<<<< HEAD
        text: 'libs/text'
=======
        text: 'libs/text',
        moment: 'libs/moment'
>>>>>>> b1cbcef60487a49e15e3670834586252039e4451
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