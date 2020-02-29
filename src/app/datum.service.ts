import { Injectable } from '@angular/core';
import * as moment from 'moment';

/**
 * Service-Klasse für Datums-Berechnungen, verwendet moment.js:
 * https://momentjs.com/docs/#/use-it/typescript/
 */
@Injectable({
  providedIn: 'root'
})
export class DatumService {

  constructor() { }

  /**
   *
   *
   * @return  Datum als String im ISO-Format (kann von Ionic datetime-element dargestellt werden).
   */
  heutePlusEinMonat() : string {

    return moment().add( 1, "month").toISOString();
  }

}
