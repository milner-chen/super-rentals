import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a jumbo header with a tomster', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // renders component instead of navigating to page
    // saves the effort of navigating to the component you want to test
    await render(hbs`<Jumbo>Hello World</Jumbo>`);

    // find a tag with jumbo class
    assert.dom('.jumbo').exists();
    // make sure it contains this text
    assert.dom('.jumbo').hasText('Hello World');
    // make sure that there is a tag with class tomster within tag with class jumbo
    assert.dom('.jumbo .tomster').exists();
  });
});
