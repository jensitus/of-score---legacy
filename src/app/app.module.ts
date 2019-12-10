import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SpineSvgComponent } from './spine-svg/spine-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpineSvgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
