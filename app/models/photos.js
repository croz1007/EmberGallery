import DS from 'ember-data';

var Photo = DS.Model.extend({
  title: DS.attr('string'),
  photos: DS.hasMany('photo')
});

export default Photo;
