import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var url = 'http://localhost:3000/v2/';
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
    // var result = $.ajax({
    //   url: url + 'sales',
    //   data: payload,
    //   dataType: 'jsonp',
    //   method: 'POST'
    // });
    // // console.log("Payload: " + JSON.stringify(payload) + "\nResponse: " + JSON.stringify(result));
    // console.log(result);
    var request = new Ember.RSVP.Promise(function(resolve, reject){
      Ember.$.ajax({
        url: url + 'sales',
        data: payload,
        dataType: 'jsonp',
        type: 'POST',
        success: function(response){
          resolve(response);
        },
        error: function(reason){
          reject(reason);
        }
      })
    });
    request.then(function(response){
      console.log(response);
    }, function(error){
      console.log(error);
    });
    return request;
  }
});
