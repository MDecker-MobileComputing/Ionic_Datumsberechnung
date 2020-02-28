import { Component } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  _heuteDatum: String = new Date().toISOString();

  /* Wird auf "Datum 1" geändert, wenn mit Segment-Button "differenz" ausgewählt. */
  _datumPicker1Label = "Datum";

  _datumPicker2Unsichtbar = true;


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
          this._datumPicker2Unsichtbar = true;
          this._datumPicker1Label      = "Datum";
        break;

      case "differenz":
          this._datumPicker2Unsichtbar = false;
          this._datumPicker1Label      = "Datum 1";
        break;

      default:
        console.log(`Unerwarteter SegmentWert \"${segmentWert}\".`);
    }
  }


}
