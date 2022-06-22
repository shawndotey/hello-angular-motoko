import { Component } from "@angular/core";
import { IcHelloService } from "./ic-hello.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'hello-angular-motoko';
  public response = '';
  constructor(private helloService: IcHelloService){
    this.getResponse();
  }
  public async getResponse(){
    const start = Date.now();
	  console.log("start request")
    this.response = await this.helloService.greet('Angular');
    const duration = Date.now() - start;
    console.log("request time", duration)
  }
}
