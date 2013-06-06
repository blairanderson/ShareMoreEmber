App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});


// console.log(myData);
// App.myData = Em.Object.extend({});

// var data = App.myData.create();

// data.set('articles', myData);

// console.log(data.get('articles'));

//   something: function() {
//     var myData = [];
//     $.getJSON('http://share-more.herokuapp.com/api/v1/articles',
//     {access_token : "iT7e1ZDMR_w"},
//     function(data) {
//     myData = data;
//     });
//     return myData;
//   }
// })

// var myData = [];
// $.getJSON('http://share-more.herokuapp.com/api/v1/articles',
// {access_token : "iT7e1ZDMR_w"},
// function(data) {
// myData = data;
// });

var attr = Ember.attr;
App.Articles = Ember.Model.extend({
  title: attr(),
  body: attr(),
  createdAt: attr(),
  id: attr(),
  url: attr()
});

App.Articles.url = "http://share-more.herokuapp.com/api/v1/articles";
App.Articles.adapter = Ember.RESTAdapter.create();
// App.Articles.adapter.ajax("");




App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.Articles.findQuery({access_token: "iT7e1ZDMR_w"});
  }
});
