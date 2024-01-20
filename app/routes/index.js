import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class IndexRoute extends Route {
  // model hook
    // fetches + prepares data for route
    // automatically called when entering a route
    // returns an object: model for the route
  async model() {
    // we're still not fetching yet, just returning object of info
    
    let res = await fetch('/api/rentals.json');
    // let data = await res.json();
    let { data } = await res.json();

    return data.map((model) => {
      let { attributes } = model;
      let type;

      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      return { type, ...attributes };
    });

  };
}
