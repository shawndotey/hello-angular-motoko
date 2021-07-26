import { Component } from "@angular/core";
import { IcConnectionService } from "projects/ic-connection/src/public-api";
const ic_hello = require('src/declarations/hello').hello;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-angular-motoko';
  constructor(private connection: IcConnectionService){
    console.log('ic_hello', ic_hello)
    this.go();
  }
  public async go(){
    const value  = await ic_hello.test();
    console.log('value', value)
  }
}
