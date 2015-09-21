import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  headers: {
    'sellerId': '208364',
    'privateKey': '2222'
  }
});
