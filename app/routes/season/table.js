import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var season = this.modelFor('season');
    this.controllerFor('season.table').set('seasonId', season.id);
    return this.store.find('table', {season_id: season.id});
  }
});
