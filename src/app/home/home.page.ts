import { Component } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';
import { DatumService } from '../datum.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /** Default-Wert für DatePicker-Element 1 (aktuelles Datum). */
  _defaultDatumFuerDatePicker1: String = "";

  /** Default-Wert für DatePicker-Element 2 (zukünftiges Datum). */
  _defaultDatumFuerDatePicker2: String = "";

  /** Wird auf "Datum 1" geändert, wenn mit Segment-Button "differenz" ausgewählt. */
  _datumPicker1Label = "Datum";

  /** Flag für Sichtbarkeit von zweitem DatePicker-Element */
  _datumPicker2Unsichtbar = true;


  constructor( private _datumService : DatumService ) {

    this._defaultDatumFuerDatePicker1 = new Date().toISOString();

    this._defaultDatumFuerDatePicker2 = this._datumService.heutePlusEinMonat();
  }


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
