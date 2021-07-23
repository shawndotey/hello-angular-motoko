import { Injectable } from '@angular/core';
const ic_main = require('./dfx-source').ic_main;
import {_SERVICE} from 'src/declarations/hello/hello.did'
//import {ic_main} from "../lib/ic_main/src/declarations/ic_main/index.js";
@Injectable({
  providedIn: 'root'
})
export class IcConnectionService {
  public hello:_SERVICE;
  constructor() {
    console.log('ic_main', ic_main)
    const doc = document as any;
    this.hello = ic_main;
    //this.hello = ic_main;
    console.log('this.hello', this.hello)
  }
}
