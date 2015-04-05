import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    gameday: {
      refreshModel: true
    }
  },
  model: function(params) {
    var gameday = parseInt(params.gameday) || 1;
    var season = this.modelFor('season');
    this.controllerFor('season.fixtures').set('seasonId', season.get('id'));
    this.controllerFor('season.fixtures').set('totalGameDays', season.get('num_game_days'));
    this.controllerFor('season.fixtures').set('gameday', gameday);
    return this.store.find('fixture', {season_id: season.get('id'), gameday: gameday});
  }
});
