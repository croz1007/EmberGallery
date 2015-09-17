import DS from 'ember-data';

var Photos = DS.Model.extend({
  title: DS.attr('string')
});

export default Photos;
