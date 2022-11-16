import { Controller } from "@hotwired/stimulus"
import Typed from 'typed.js';


// Connects to data-controller="typed"
export default class extends Controller {
  static targets = [ "stringElement", "typedZone" ]
  connect() {
    var typed = new Typed('#typing-text-area', {
      stringsElement: '#string-element',
      loop: true,
      typeSpeed: 60,
      backSpeed: 15,
      smartBackspace: true,
      backDelay: 3000,
    })
  }
}
