import { Component } from '@angular/core';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as hello_idl, canisterId as hello_id } from './dfx-generated/hello/hello';

const agent = new HttpAgent();
const canister = Actor.createActor(hello_idl, { agent, canisterId: hello_id });
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-angular-motoko';
  constructor(){
    canister.hello().then((result)=>{
      console.log('result', result);
    })
  }
}
