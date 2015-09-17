import DS from 'ember-data';

var Photo = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.attr('string'),
  dateTaken: DS.attr('date'),
  aperture: DS.attr('string'),
  shutter: DS.attr('string'),
  iso: DS.attr('number'),
  src: DS.attr('string'),
  photos: DS.belongsTo('photos')
});

Photo.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Photo 1',
      description: 'This is the first',
      location: 'Columbus, OH.',
      dateTaken: new Date('09-05-2015'),
      aperture: 'f/2.8',
      shutter: '1/50',
      iso: 100,
      src: 'http://fillmurray.com/500/600'
    },
    {
      id: 2,
      title: 'Photo 2',
      description: 'This is the second',
      location: 'Hollywood, CA',
      dateTaken: new Date('09-05-2015'),
      aperture: 'f/16',
      shutter: '1/250',
      iso: 100,
      src: 'http://fillmurray.com/450/500'
    },
    {
      id: 3,
      title: 'Photo 3',
      description: 'This is the third',
      location: 'Dallas, TX',
      dateTaken: new Date('09-07-2015'),
      aperture: 'f/2.8',
      shutter: '1/500',
      iso: 100,
      src: 'http://fillmurray.com/420/550'
    },
    {
      id: 4,
      title: 'Photo 4',
      description: 'This is the forth',
      location: 'San Diego, CA.',
      dateTaken: new Date('09-08-2015'),
      aperture: 'f/5.6',
      shutter: '1/150',
      iso: 100,
      src: 'http://fillmurray.com/330/375'
    },
    {
      id: 5,
      title: 'Photo 5',
      description: 'This is the fifth',
      location: 'Columbus, OH',
      dateTaken: new Date('09-15-2015'),
      aperture: 'f/2.8',
      shutter: '1/50',
      iso: 100,
      src: 'http://fillmurray.com/520/340'
    },
    {
      id: 6,
      title: 'Photo 6',
      description: 'This is the sixth',
      location: 'Dallas, TX',
      dateTaken: new Date('09-07-2015'),
      aperture: 'f/8',
      shutter: '1/50',
      iso: 100,
      src: 'http://fillmurray.com/420/550'
    },
    {
      id: 7,
      title: 'Photo 7',
      description: 'This is the seventh',
      location: 'San Diego, CA.',
      dateTaken: new Date('09-08-2015'),
      aperture: 'f/5.6',
      shutter: '1/150',
      iso: 100,
      src: 'http://fillmurray.com/130/375'
    },
    {
      id: 8,
      title: 'Photo 8',
      description: 'This is the eigth',
      location: 'Columbus, OH',
      dateTaken: new Date('09-15-2015'),
      aperture: 'f/2.8',
      shutter: '1/50',
      iso: 100,
      src: 'http://fillmurray.com/500/240'
    }
  ]
});

export default Photo;
