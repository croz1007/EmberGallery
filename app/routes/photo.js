import Ember from 'ember';

var Photo = Ember.Route.extend({
  model: function(param){
    return this.store.find(param);
  }
});

export default Photo;
