import { Component} from '@angular/core';
import {DialogConfig} from "../../dialog/classes/dialog-config";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  constructor(public config: DialogConfig) {}

  onClose() {}
}
