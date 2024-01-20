import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function (assert) {
    await render(hbs`
      <Rental::Image
        src="/assets/images/teaching-tomster.png"
        alt="Teaching Tomster"
      />
    `);

    assert
      .dom('.image img')
      .exists()
      .hasAttribute('src', '/assets/images/teaching-tomster.png')
      .hasAttribute('alt', 'Teaching Tomster');
  });

  test('clicking component toggles its size', async function (assert) {
    await render(hbs`
      <Rental::Image
        src="/assets/images/teaching-tomster.png"
        alt="Teaching Tomster"
      />
    `);

    // check that there is a button with class image
    assert.dom('button.image').exists();

    // check that default state does not contain large
    assert.dom('.image').doesNotHaveClass('large');
    // small tag should contain this
    assert.dom('.image small').hasText('View Larger');
    
    // click on the button -> maybe including button tag makes it more accessible?
    await click('button.image');

    // check that toggle succeeded -> check for large class
    assert.dom('.image').hasClass('large');
    // small tag check should have changed
    assert.dom('.image small').hasText('View Smaller');

    // toggle button again
    await click('button.image');

    // check it changed back to large
    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');
  });
  
});
