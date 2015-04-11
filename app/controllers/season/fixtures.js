import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ["gameday"],
  seasonId: null,

  table: [],

  prevGameDay: function() {
    return parseInt(this.get('gameday')) - 1;
  }.property('gameday'),

  nextGameDay: function() {
    return parseInt(this.get('gameday')) + 1;
  }.property('gameday'),

  hasPrev: function() {
    return parseInt(this.get('gameday')) !== 1;
  }.property('gameday'),

  hasNext: function() {
    return parseInt(this.get('gameday')) < this.get('totalGameDays');
  }.property('gameday'),

  onFixtureChange: function() {
    this.updateTable();
  }.observes('model'),

  updateTable: function() {
    this.store.unloadAll('table');
    var table = this.store.find('table', {season_id: this.get('seasonId')});
    this.set('table', table);
  },

  actions: {
    updateScore: function(fixture) {
      var that = this;
      fixture.save().then(function() {
        that.updateTable();
      });
    }
  }
});
