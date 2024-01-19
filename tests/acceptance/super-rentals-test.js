import { module, test } from 'qunit';
// import { visit, currentURL } from '@ember/test-helpers';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'super-rentals/tests/helpers';

module('Acceptance | super rentals', function (hooks) {
  setupApplicationTest(hooks);

  // change path from '/super-rentals' to '/'
  test('visiting /', async function (assert) {
    // instruct test to navigate to '/' url on the app using visit
    // async action --> need to wait for page to load
    // await keyword --> wait for page to finish loading
    await visit('/'); // await + visit usually paired up for this reason

    // assertion: specify things to check
    // will be alerted if app does not behave as expected

    // check that current url is '/'
    assert.strictEqual(currentURL(), '/');
    // check that curr page has an h2 with specified text
    // just one way to check template rendered properly
    assert.dom('h2').hasText('Welcome to Super Rentals!');

    // check that there is an element that matches css slector '.jumbo a.button' w/ specified text
    // look for tag with 'jumbo' class
    // look for a tag inside w/ 'button' class
    assert.dom('.jumbo a.button').hasText('About Us');
    // click on this link + wait for user interaction to finish
    await click('.jumbo a.button');

    // check that the current url is '/about'
    assert.strictEqual(currentURL(), '/about');
  });

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.strictEqual(currentURL(), '/about');
    assert.dom('h2').hasText('About Super Rentals');

    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), '/getting-in-touch');
  });

  test('visiting /getting-in-touch', async function (assert) {
    await visit('/getting-in-touch');

    // check url
    assert.strictEqual(currentURL(), '/getting-in-touch');
    // check h2 text
    assert.dom('h2').hasText('Contact Us');

    // check link text
    assert.dom('.jumbo a.button').hasText('About');
    // await click
    await click('.jumbo a.button');

    // check current url
    assert.strictEqual(currentURL(), '/about');
  });
});
