import DS from 'ember-data';

var Photos = DS.Model.extend({
  title: DS.attr('string'),
  photos: DS.hasMany('photo')
});

export default Photos;
