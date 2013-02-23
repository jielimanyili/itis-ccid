var App = Ember.Application.create();

// Router
App.Router.map(function() {
    this.resource('organizations', function() {
        this.resource('organization', {path: ':organization_id'});
    });
});

App.OrganizationsRoute = Ember.Route.extend({
    model: function() {
        return App.Organization.find();
    }
});

// Models
App.Store = DS.Store.extend({
    revision: 11,
    adapter: 'DS.FixtureAdapter'
});

App.Organization = DS.Model.extend({
    chineseName: DS.attr('string'),
    address1: DS.attr('string'),
    city: DS.attr('string'),
    state: DS.attr('string'),
    zip: DS.attr('string'),
    country: DS.attr('string')
});

App.Organization.FIXTURES = [
    {
        id: 1,
        chineseName: '愛城華人基督教會'
    },
    {
        id: 2,
        chineseName: '主愛華人福音教會愛西蘭堂'
    },
    {
        id: 3,
        chineseName: '愛西蘭中文查經團契'
    },
    {
        id: 4,
        chineseName: '中國基督徒團契'
    },
    {
        id: 5,
        chineseName: '辛城教會'
    },
    {
        id: 6,
        chineseName: '辛城台灣長老教會'
    }
];