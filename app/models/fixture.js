import DS from 'ember-data';

export default DS.Model.extend({
  season_id: DS.attr(),
  game_day: DS.attr(),
  home_score: DS.attr(),
  away_score: DS.attr(),
  home_team: DS.belongsTo('team', {async: true}),
  away_team: DS.belongsTo('team', {async: true}),
  home_recent_games: DS.hasMany('fixture', {async: true, inverse: null}),
  away_recent_games: DS.hasMany('fixture', {async: true, inverse: null}),
  head_to_head_games: DS.hasMany('fixture', {async: true, inverse: null})
});
