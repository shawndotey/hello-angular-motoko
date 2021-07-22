import { Injectable } from '@angular/core';
require('../../connection/dist/connection_assets');
@Injectable({
  providedIn: 'root'
})
export class IcConnectionService {
  public connection:any;
  constructor() {
    const doc = document as any;
    this.connection = doc['IC_CONNECTION_SERVICE'].connection;
  }
}
