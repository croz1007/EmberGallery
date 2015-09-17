import DS from 'ember-data';

var Photos = DS.Model.extend({
  title: DS.attr('string'),
  createDate: DS.attr('string', {
      defaultValue() { return new Date(); }
  }),
  photo: DS.hasMany('photo')
});

export default Photos;
