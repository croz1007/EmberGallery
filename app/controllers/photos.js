import Ember from 'ember';

export default Ember.Controller.extend({
  setupController(controller, model){
    controller.set('model', model);
  }
});
