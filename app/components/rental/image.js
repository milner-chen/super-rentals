import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  // initializing and modifying instance variables manually
    // this initialization syntax is pretty common
    // constructor(...args) {
    //   super(...args);
    //   this.isLarge = false;
    // }

    // can replace with just this
    // isLarge = false;\
  
  // add method to toggle change in instance variables / state
  @tracked isLarge = false;

  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
