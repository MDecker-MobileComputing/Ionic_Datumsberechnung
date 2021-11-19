import { Injectable } from '@angular/core';
import * as moment from 'moment';


/**
 * Service-Klasse für Datums-Berechnungen, verwendet moment.js:
 * https://momentjs.com/docs/#/use-it/typescript/
 *
 * Beim verwendeten ISO-Format für Datum/Zeit handelt es sich um ISO 8610.
 * Dieses Format wird von vom Element <ion-datetime> unterstützt.
 */
@Injectable({
  providedIn: 'root'
})
export class DatumService {

  /**
   * Moment.js auf Sprache "Deutsch" einstellen, damit deutsche Namen für
   * Monat und Wochentag verwendet werden.
   */
  constructor() {

    moment.locale("de");
  }


  /**
   * Liefert Datum "heute" als String für datetime-Element von Ionic zurück.
   *
   * @return  Datum als String im ISO-Format (kann von Ionic datetime-element dargestellt 
   *          werden), z.B. "2020-03-31T09:34:46.783Z".
   */
  heute() : string {

    return moment().toISOString();
  }


  /**
   * Liefert Datum "heute + 1 Monat" als String für datetime-Element von Ionic zurück.
   *
   * @return  Datum als String im ISO-Format (kann von Ionic datetime-element dargestellt 
   *          werden), z.B. "2020-03-31T09:34:46.783Z".
   */
  heutePlusEinMonat() : string {

    return moment().add( 1, "month").toISOString();
  }


  /**
   * Methode um auf ein als ISO-String übergebenes Datum eine bestimmte Anzahl Tage 
   * aufzuaddieren bzw. zu subtrahieren.
   *
   * @param datumIsoString  Datum als ISO-String, auf das eine bestimmte Anzahl Tage 
   *                        addiert/subtrahiert werden sollen.
   *
   * @param tage  Anzahl Tage die auf das Datum zu addieren sind (bei negativem Vorzeichen 
   *              wird subtrahiert).
   *
   * @return  Ergebnis der Berechnung, z.B. "12 März 2020 (Dienstag)".
   */
  datumPlusMinusTage( datumIsoString : string, tage: number ) : string {

    return moment(datumIsoString).add( tage, "day" ).format("DD MMMM YYYY (dddd)");
  }


  /**
   * Method um Differenz in Tagen zwischen zwei Datumswerten zu berechnen.
   *
   * @param datumIsoString1  Datumswert 1 als ISO-String.
   *
   * @param datumIsoString2  Datumswert 2 als ISO-String.
   *
   * @return  Differenz in Tagen, kann auch negativ sein.
   */
  datumsDifferenz( datumIsoString1 : string, datumIsoString2 : string ) : number {

    let moment1 = moment(datumIsoString1);
    let moment2 = moment(datumIsoString2);

    return moment2.diff( moment1, "days" );
  }

}
