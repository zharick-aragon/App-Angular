import { HttpClientModule } from '@angular/common/http';
import { SeriesListComponent } from './series/series.component';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
