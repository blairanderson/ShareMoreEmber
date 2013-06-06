App = Ember.Application.create();

App.Router.map(function() {
  this.resource('articles');
  this.resource('article', { path: '/article/:article_id'});
});

var attr = Ember.attr;
App.Articles = Ember.Model.extend({
  // id: attr(),
  title: attr(),
  body: attr(),
  created_at: attr(),
  article_id: attr(),
  url: attr()
});

// App.IndexController = Ember.Controller.extend({

// });

App.FormView = Ember.View.extend({
  tagName: "form",

  submit: function(event) {
    var myURL="http://share-more.herokuapp.com/api/v1/articles?access_token=JDVr-w8bxoU";

  $.ajax({
    url: myURL,
    data: {"access_token" : "JDVr-w8bxoU", "article" : {"title" : event.target[0].value , "body" : event.target[1].value} },
    type: 'POST'
  });
  
//{title: event.target[0].value, body: event.target[1].value}
    //{title: event.target[0].value, body: event.target[1].value}

    // will be invoked whenever the user triggers
    // the browser's `submit` method
  }
});


App.Articles.url = "http://share-more.herokuapp.com/api/v1/articles";
App.Articles.adapter = Ember.RESTAdapter.create();

App.ArticleRoute = Ember.Route.extend({
  model: function(param) {
   return App.Articles.find(param.article_id);
  }
});

App.ArticlesRoute = Ember.Route.extend({
  model: function() {
    return App.Articles.findQuery({access_token: "JDVr-w8bxoU"});
  }
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.Articles.findQuery({access_token: "JDVr-w8bxoU"});
  }
});
