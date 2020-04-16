import { Component } from '@angular/core';
import {ExampleComponent} from "./example/example.component";
import {DialogService} from "./dialog/services/dialog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dynamic-components';
  constructor(public dialog: DialogService) {
    this.dialog.open(ExampleComponent)
  }
}
