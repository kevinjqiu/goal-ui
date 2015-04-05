import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('season', params.season_id);
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('season', model);
  }
});
