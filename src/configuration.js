requirejs.config({
    deps: ["githubsearch"],
    paths: {
        jquery: "libs/jquery",
        Handlebars: "libs/handlebars",
        Ember: "libs/ember",
        text: "libs/text"
    },
    shim: {
        Handlebars: {
            exports: "Handlebars"
        },
        Ember: {
            deps: ["jquery", "Handlebars"],
            exports: "Ember"
        }
    }
});