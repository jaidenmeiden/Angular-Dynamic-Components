import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DialogModule} from "./dialog/dialog.module";
import { ExampleComponent } from './services/example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    DialogModule
  ],
  exports: [
    ExampleComponent
  ],
  entryComponents: [
    ExampleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
