ember new

ember server

Create Pages:
1. router.js
  - add route to new page
  `this.route('pageName')` --> /pageName
  - Routes with Custom Paths
  `this.route('pageName', {path: '/actual-url-path' })`
2. templates/pageName.hbs
  - create corresponding template

components
- create new `.hbs` file under `app/components`
1. arguments: `@argName=""`
2. regular HTML attributes: `attrName=""`

LinkTo
- actions below are performed locally
- do not wait for the server + does not need a full page refresh
1. interpret click
2. render content for new page
3. update URL

generate automated tests
`ember generate acceptance-test app-name`
- generate file called `app-name-test.js` in `/tests/acceptance`
- acceptance tests AKA application tests
- test app from user perspective
1. test(str, async function(assert))
- str specifies name of test / what is being tested
- function contains the code to run for the test
`ember generate component-test app-name`
- generate file called `app-name-test.js` in `/tests/component`
- component tests AKA rendering tests
- render and test a single component at a time

run test server
`ember test --server` or `ember t -s`
- visit att 'http://localhost:7357/'

`{{yield}}`
- will replace component tag with content in component's template
- similar to using `{children}` in react

application template
- does not have its own URL and cannot be navigated to
- put things that should appear on every page here --> common layout
- ex: navbar, footer
- `{{outlet}}`: indicates where site's page should be rendered
  - similar to `{{yield}}`

namespaced components
`ember generate component rental/image`
- will create `rental` folder in components + image template
- invoke with `<Rental::Image>`
- organize components by folders (like putting everything under api)
- optional + doesn't have any special functionality


forwarding HTML attributes (AKA splattribute syntax)
- in component: `<img ...attrinbutes>`
- invoking: `<Rental::Image src="https://url.com" alt="image.png">`
- can pass all HTML attributes
