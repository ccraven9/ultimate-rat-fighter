import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationContainerComponent } from './container/application-container/application-container.component';
import { ComponentModule } from './components/component-module.module';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationContainerComponent,
  ],
  imports: [
    BrowserModule,
    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
