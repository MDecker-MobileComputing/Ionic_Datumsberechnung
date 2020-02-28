import { Component } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  _heuteDatum: String = new Date().toISOString();

  constructor() {}


  /**
   *
   * @param event CustomEvent<SegmentChangeEventDetail>
   */
  async onSegmentButtonGeaendert(event : any) {

    console.log(`onSegmentButtonGeaendert wurde ausgelöst: ${event.detail.value}`);
  }


}
