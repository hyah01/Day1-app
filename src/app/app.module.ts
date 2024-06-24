import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TestComponent } from './app.test';
import { AmaJohnService } from './demolist.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(), AmaJohnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
