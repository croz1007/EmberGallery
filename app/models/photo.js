import DS from 'ember-data';

var Photo =  DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.attr('string'),
  dateTaken: DS.attr('date'),
  aperture: DS.attr('string'),
  shutter: DS.attr('string'),
  iso: DS.attr('number')
});

export default Photo;
