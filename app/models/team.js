import DS from 'ember-data';

export default DS.Model.extend({
  country_id: DS.attr(),
  name: DS.attr(),
  logo_url: function() {
    return '/assets/logos/normal/' + this.get('id') + '.png';
  }.property('id')
});
