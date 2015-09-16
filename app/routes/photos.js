import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, gallery) {
    controller.set('title', 'My Gallery');
  }
});
