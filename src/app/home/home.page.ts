import { Component } from '@angular/core';
import { DatumService } from '../datum.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /** Datum von DatePicker-Element 1. */
  _datumPicker1: string = "";

  /** Datum von DatePicker-Element 2. */
  _datumPicker2: string = "";

  /** Wird auf "Datum 1" geändert, wenn mit Segment-Button "differenz" ausgewählt. */
  _datumPicker1Label = "Datum";

  /** Flag, mit dem die Sichtbarkeit der dynamischen Elemente gesteuert wird. */
  _plusMinusModus = true;

  /** Wert in ion-input-Element mit Anzahl Tage (muss String sein, obwohl type="number"). */
  _plusMinusTage = "30";


  /**
   * Konstruktor, setzt Datumswerte für die beiden DatumsPicker-Elemente.
   *
   * @param _datumService  Service-Objekt mit Logik für Durchführung Datumsberechnungen
   */
  constructor( private _datumService : DatumService ) {

    this._datumPicker1 = new Date().toISOString();

    this._datumPicker2 = this._datumService.heutePlusEinMonat();
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
          this._plusMinusModus    = true;
          this._datumPicker1Label = "Datum";
        break;

      case "differenz":
          this._plusMinusModus    = false;
          this._datumPicker1Label = "Datum 1";
        break;

      default:
        console.log(`Unerwarteter SegmentWert \"${segmentWert}\".`);
    }
  }


  /**
   * Event-Handler für Button zum Durchführen der Berechnung.
   */
  async onBerechnungButton() {

    console.log("onBerechnungButton gedrückt");

    if (this._plusMinusModus) {

      let plusMinusTageAlsNumber = Number(this._plusMinusTage);

      let ergebnisDatum = this._datumService.datumPlusMinusTage( this._datumPicker1, plusMinusTageAlsNumber );

      console.log(`Berechnungsergebnis ${this._datumPicker1} + ${plusMinusTageAlsNumber} Tage: ${ergebnisDatum}`);

    } else {

      console.log("Berechnung für diesen Modus noch nicht implementiert.");

    }
  }

}
