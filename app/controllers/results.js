import Ember from 'ember';

var address = {
  'name': 'Testing Guy',
  'address_1': '2440 Broad St',
  'city': 'Columbus',
  'state': 'OH',
  'country_code': 'USA',
  'postal_code': '43215'
};
var payload = {
    'merchant_order_id': '123',
    'amount': 10.50,
    'customer': {
      'currency': 'USD',
      'email': 'test@email.com',
      'phone': '555-555-5555',
      'lang': 'en',
      'payment_method': {
        'credit_card': {
          'number': '4111111111111111',
          'cvv': '123',
          'exp_month': 12,
          'exp_year': 2020
        },
        'address': address
      },
      'shipping_address': address
    }
};

var Results = Ember.Controller.extend({

});

export default Results;
