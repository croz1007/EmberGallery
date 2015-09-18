import Ember from 'ember';

var Photo = Ember.Route.extend({
  model: function(params){
    return this.store.find('photo', params.photo_id);
  }
});

export default Photo;
