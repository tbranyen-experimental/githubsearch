define([
        'Ember',
        'moment'
       ],
function (Ember) {
    GithubSearch.Repo = Ember.Object.extend({
        created: null,
        description: null,
        followers: null,
        forks: null,
        name: null,
        language: null,
        owner: null,
        pushed: null,
        watchers: null,

        formattedFollowers: function () {
            x = this.get('followers').toString().split('.');
            x1 = x[0];
            x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ' ' + '$2');
            }
            return x1 + x2;
        }.property('followers'),

        formattedForks: function () {
            x = this.get('forks').toString().split('.');
            x1 = x[0];
            x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ' ' + '$2');
            }
            return x1 + x2;
        }.property('forks'),

        createdAt: function () {
            return 'Created ' + moment(this.get('created')).fromNow();
        }.property('created'),

        languageTitle: function () {
            return 'This project is written in ' + this.get('language');
        }.property('language'),

        forksTitle: function () {
            return this.get('forks') + ' forked this project';
        }.property('forks'),

        followersTitle: function () {
            return this.get('followers') + ' starred this project';
        }.property('followers'),

        pushedAt: function () {
            return 'Last commit was ' + moment(this.get('pushed')).fromNow();
        }.property('pushed'),

        repoUrl: function () {
            return 'https://github.com/' + this.get('owner') + '/' + this.get('name');
        }.property('owner', 'name'),

        ownerUrl: function () {
            return 'https://github.com/' + this.get('owner');
        }.property('owner')
    });
});