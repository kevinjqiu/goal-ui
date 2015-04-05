import DS from 'ember-data';

export default DS.Model.extend({
  pos: DS.attr(),
  team_name: DS.attr(),
  team: DS.attr(),
  h_win: DS.attr(),
  h_draw: DS.attr(),
  h_loss: DS.attr(),
  h_gf: DS.attr(),
  h_ga: DS.attr(),
  a_win: DS.attr(),
  a_draw: DS.attr(),
  a_loss: DS.attr(),
  a_gf: DS.attr(),
  a_ga: DS.attr(),
  win: DS.attr(),
  draw: DS.attr(),
  loss: DS.attr(),
  gf: DS.attr(),
  ga: DS.attr(),
  gd: DS.attr(),
  pld: DS.attr(),
  pts: DS.attr(),

  team_logo_url: function() {
    return '/assets/logos/normal/' + this.get('team') + '.png';
  }.property('team'),

  h_gd: function() {
    return this.get('h_gf') - this.get('h_ga');
  }.property('h_gf', 'h_ga'),

  a_gd: function() {
    return this.get('a_gf') - this.get('a_ga');
  }.property('a_gf', 'a_ga')

});
