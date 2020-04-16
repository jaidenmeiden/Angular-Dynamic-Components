import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  Type,
  ViewChild
} from '@angular/core';
import {Subject} from "rxjs";
import {InsertionDirective} from "../../directives/insertion.directive";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements AfterViewInit, OnDestroy {
  private readonly _onClose = new Subject<any>();

  public componentRef: ComponentRef<any>;
  public childComponentType: Type<any>;
  public onClose = this._onClose.asObservable();

  // add this:
  @ViewChild(InsertionDirective, {static: false}) insertionPoint: InsertionDirective;

  // and this:
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {}

  ngOnDestroy() {}

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation()
  }
}
