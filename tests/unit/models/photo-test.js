import { moduleForModel, test } from 'ember-qunit';

moduleForModel('photo', 'Unit | Model | photo', {
  // Specify the other units that are required for this test.
  needs: ['model:photo']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
