import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

Ember.getJSON = function(endpoint) {
  var url = "http://localhost:5000" + endpoint;
  return Ember.$.ajax({
    url: url,
    type: "GET",
    crossDomain: true,
    contentType: 'application/json',
    dataType: 'json'
  });
};

Ember.patchJSON = function(endpoint, data) {
  var url = "http://localhost:5000" + endpoint;
  return Ember.$.ajax({
    url: url,
    type: "PATCH",
    crossDomain: true,
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data)
  });
};

loadInitializers(App, config.modulePrefix);

export default App;
