import DS from 'ember-data';

var Photo = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  location: DS.attr(),
  dateTaken: DS.attr(),
  aperture: DS.attr(),
  shutter: DS.attr(),
  iso: DS.attr(),
  src: DS.attr(),
  photos: DS.belongsTo('photos')
});

export default Photo;
