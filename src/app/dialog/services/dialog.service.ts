import {ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector} from '@angular/core';
import {DialogComponent} from "../components/dialog/dialog.component";
import {DialogModule} from "../dialog.module";

@Injectable({
  providedIn: DialogModule
})
export class DialogService {
  dialogComponentRef: ComponentRef<DialogComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  appendDialogComponentToBody() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
  }
}
