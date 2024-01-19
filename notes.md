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
1. arguments: `@argName=""`
2. regular HTML attributes: `attrName=""`

LinkTo
- actions below are performed locally
- do not wait for the server + does not need a full page refresh
1. interpret click
2. render content for new page
3. update URL
