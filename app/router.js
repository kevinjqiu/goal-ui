import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('season', { path: '/season/:season_id' }, function() {
    this.route('table');
    this.route('fixtures');
    this.route('fixture', { path: '/fixture/:fixture_id' });
  });
  this.route('team', { path: '/team/:team_id' });
});

export default Router;
