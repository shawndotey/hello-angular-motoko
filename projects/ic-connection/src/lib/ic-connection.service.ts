import { Injectable } from '@angular/core';
require('../../../../src/hello_assets/src');
@Injectable({
  providedIn: 'root'
})
export class IcConnectionService {
  public hello:any;
  constructor() {
    const doc = document as any;
    this.hello = doc['IC_CONNECTION_SERVICE'].hello;
  }
}
