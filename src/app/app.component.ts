import { Component } from "@angular/core";
import { IcConnectionService } from "projects/ic-connection/src/public-api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-angular-motoko';
  constructor(private connection: IcConnectionService){
    connection.hello.greet('Shawn').then((result:any)=>{
      console.log('result', result);
    })
  }
}
