import { Component} from '@angular/core';
import {DialogConfig} from "../../dialog/classes/dialog-config";
import {DialogRef} from "../../dialog/classes/dialog-ref";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  constructor(public config: DialogConfig, public dialog: DialogRef) {}

  onClose() {
    this.dialog.close('some value')
  }
}
