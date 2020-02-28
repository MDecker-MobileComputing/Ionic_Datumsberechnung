import { Component } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  _heuteDatum: String = new Date().toISOString();

  _datum2PickerUnsichtbar = true;


  constructor() {}


  /**
   * Event-Handler-Methode für Zustandsänderung des Segment-Buttons.
   *
   * @param event CustomEvent<SegmentChangeEventDetail>
   */
  async onSegmentButtonGeaendert(event: any) {

    let segmentWert = event.detail.value;

    switch (event.detail.value) {

      case "plusMinus":
          console.log("Modus \"plusMinus\"");
          this._datum2PickerUnsichtbar = true;
        break;

      case "differenz":
          console.log("Modus \"different\"");
          this._datum2PickerUnsichtbar = false;
        break;

      default:
        console.log(`Unerwarteter SegmentWert \"${segmentWert}\".`);
    }
  }


}
