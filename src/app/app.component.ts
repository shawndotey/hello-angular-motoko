import { Component } from '@angular/core';
//import { hello } from 'src/declarations/hello';
const hello = require('src/declarations/hello/index.js');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-angular-motoko';
  constructor(){
    hello.greet().then((result:any)=>{
      console.log('result', result);
    })
    
  }
}
