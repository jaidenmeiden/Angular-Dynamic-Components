import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  Type,
  ViewChild
} from '@angular/core';
import {Subject} from "rxjs";
import {InsertionDirective} from "../../directives/insertion.directive";
import {DialogRef} from "../../classes/dialog-ref";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements AfterViewInit, OnDestroy {
  componentRef: ComponentRef<any>;

  @ViewChild(InsertionDirective, {static: true}) insertionPoint: InsertionDirective;

  private readonly _onClose = new Subject<any>();
  public onClose = this._onClose.asObservable();

  childComponentType: Type<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    private dialogRef: DialogRef
  ) {}

  ngAfterViewInit() {
    console.log(this.childComponentType);
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent) {
    this.dialogRef.close();
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }

  loadChildComponent(componentType: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    const viewContainerRef = this.insertionPoint.viewContainerRef;
    console.log(this.insertionPoint);
    console.log(viewContainerRef);
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  close() {
    this._onClose.next();
  }
}
