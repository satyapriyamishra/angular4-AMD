import { Component,OnInit } from '@angular/core';
import * as MyModule from './../extra/mymodule';
import * as Module2 from './../extra/module2';
//import * as Module3 from './../extra/module3';
declare var MyObject: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  values = MyModule.value;
  name = MyModule.name;
  func = MyModule.func();
  house = Module2.house;
  //console.log('my value is', MyModule.value);
}
