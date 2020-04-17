import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector, Type
} from '@angular/core';
import {DialogComponent} from "../components/dialog/dialog.component";
import {DialogModule} from "../dialog.module";
import {DialogConfig} from "../classes/dialog-config";
import {DialogInjector} from "../injectors/dialog-injector";

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

  private appendDialogComponentToBody(config: DialogConfig){
    // create a map with the config
    const map = new WeakMap();
    map.set(DialogConfig, config);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    const componentRef = componentFactory.create(new DialogInjector(this.injector, map));
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.dialogComponentRef = componentRef;
  }

  private removeDialogComponentFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }

  public open(componentType: Type<any>, config: DialogConfig) {
    this.appendDialogComponentToBody(config);

    this.dialogComponentRef.instance.childComponentType = componentType;

  }
}
