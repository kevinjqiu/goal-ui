import DS from 'ember-data';

export default DS.Model.extend({
  competition_id: DS.attr(),
  start_year: DS.attr(),
  end_year: DS.attr(),
  num_game_days: DS.attr(),
  next_game_day: DS.attr()
});
