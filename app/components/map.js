import Component from '@glimmer/component';
// import access token from config file
import ENV from 'super-rentals/config/environment';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default class MapComponent extends Component {

  // take care of all the formatting and return in template
  get src() {
    // this.args -> API from glimmer component class
      // access component's args within class
    let { lng, lat, width, height, zoom } = this.args;
    // auto-tracking
      // all values that can be accessed from this.args are implicitly marked as @tracked

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  // getter --> this.token will return token in class + template
  get token() {
    // URL-encode in case token includes not URL-safe characters
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);

    // process.env was returning undefined
    // fix: install 'ember-cli-dotenv'
      // package that makes it easy to load environment vars from a .env file in Node apps
      // also altered the .ember-cli file to include 'env'
  }
}