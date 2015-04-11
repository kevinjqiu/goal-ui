import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    season_id: {
      refreshModel: true
    }
  },
  model: function(params) {
    // TODO Need to refactor
    var seasonId = params.season_id;
    var teamId = params.team_id;
    this.set('teamId', teamId);
    return {
      'team': this.store.find('team', teamId),
      'fixtures': this.store.find(
        'fixture', {
          season_id: seasonId,
          team_ids: teamId
        })
    };
  }/*,
  afterModel: function(model, transition) {
    var that = this;
    model.fixtures.then(function(data) {
      var fixtures = data.map(function(fixture) {
        if (fixture.get('home_team_id') === that.get('teamId')) {
          fixture.set('homeOrAway', 'H');
          fixture.set('against', fixture.get('away_team'));
          fixture.set('displayScore', fixture.get('home_score') + ":" + fixture.get('away_score'));
        } else {
          fixture.set('homeOrAway', 'A');
          fixture.set('against', fixture.get('home_team'));
          fixture.set('displayScore', fixture.get('away_score') + ":" + fixture.get('home_score'));
        }
        return fixture;
      });
      that.controllerFor('team').set('fixtures', fixtures);
    });
  }*/
});
