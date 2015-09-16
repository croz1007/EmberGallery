import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('photos', { path: '/photos' }, function(){
    this.route('photo', { path: '/:id'});
    this.route('create');
  });
  this.route('contact');
  this.route('about');
});

export default Router;
