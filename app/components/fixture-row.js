import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "div",
  classNames: ["row"],
  isEditing: false,

  score: function() {
    var fixture = this.get('fixture'),
        home_score = fixture.get('home_score'),
        away_score = fixture.get('away_score');
    
    if (home_score === null || away_score === null) {
      return "";
    } else {
      return home_score + ":" + away_score;
    }
  }.property('fixture'),

  actions: {
    enterUpdate: function() {
      this.set('isEditing', true);
    },
    updateScore: function() {
      this.set('isEditing', false);
      var fixture = this.get('fixture');
      var s = this.score.split(":");
      fixture.set('home_score', parseInt(s[0]));
      fixture.set('away_score', parseInt(s[1]));
      this.sendAction('action', fixture);
    },
    predict: function() {
      var fixture = this.get('fixture');
      var that = this;
      Ember.getJSON('/v2/fixtures/' + fixture.id + '/predict').then(function(data) {
        var p = that.$().find('.prediction');
        p.text(data.score.home + ":" + data.score.away);
      });
    }
  }

});
