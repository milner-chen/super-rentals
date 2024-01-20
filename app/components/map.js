import Component from '@glimmer/component';
// import access token from config file
import ENV from 'super-rentals/config/environment';

export default class MapComponent extends Component {
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