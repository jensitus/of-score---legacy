import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './header/navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OneComponent} from './of/one/one.component';
import {TwoComponent} from './of/two/two.component';
import {ThreeComponent} from './of/three/three.component';
import {FourComponent} from './of/four/four.component';
import {FiveComponent} from './of/five/five.component';
import {SixComponent} from './of/six/six.component';
import {ResultComponent} from './of/result/result.component';
import {RoutingModule} from './routing/routing.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
