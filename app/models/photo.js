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

Photo.reopenClass({
  FIXTURES: [
    {
      title: 'Photo 1',
      description: 'This is the first',
      location: 'Columbus, OH',
      dateTaken: new Date('09-05-2015'),
      aperture: 'f/2.8',
      shutter: '1/50',
      iso: 100
    },
    {
      title: 'Photo 2',
      description: 'This is the second',
      location: 'Columbus, OH',
      dateTaken: new Date('09-05-2015'),
      aperture: 'f/16',
      shutter: '1/250',
      iso: 100
    },
    {
      title: 'Photo 3',
      description: 'This is the third',
      location: 'Columbus, OH',
      dateTaken: new Date('09-07-2015'),
      aperture: 'f/2.8',
      shutter: '1/500',
      iso: 100
    },
    {
      title: 'Photo 4',
      description: 'This is the forth',
      location: 'Columbus, OH',
      dateTaken: new Date('09-08-2015'),
      aperture: 'f/5.6',
      shutter: '1/150',
      iso: 100
    },
    {
      title: 'Photo 5',
      description: 'This is the fifth',
      location: 'Columbus, OH',
      dateTaken: new Date('09-15-2015'),
      aperture: 'f/2.8',
      shutter: '1/50',
      iso: 100
    }
  ]
});

export default Photo;
