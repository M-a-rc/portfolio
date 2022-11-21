import { Controller } from "@hotwired/stimulus"
import AOS from 'aos';


// Connects to data-controller="aos"
export default class extends Controller {
  connect() {
    AOS.init({
      // offset: 200,
      delay: 100,
      duration: 700
    })
  }
}
