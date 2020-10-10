import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {OneComponent} from '../of/one/one.component';
import {TwoComponent} from '../of/two/two.component';
import {ThreeComponent} from '../of/three/three.component';
import {FourComponent} from '../of/four/four.component';
import {FiveComponent} from '../of/five/five.component';
import {SixComponent} from '../of/six/six.component';
import {ResultComponent} from '../of/result/result.component';
import {SevenComponent} from '../of/seven/seven.component';
import {LegalComponent} from '../legal/legal.component';
import {FurtherComponent} from '../further/further.component';

const routes: Routes = [
  {path: 'home',   component:  HomeComponent},
  {path: '',       redirectTo: 'home', pathMatch: 'full'},
  {path: 'one',    component:  OneComponent},
  {path: 'two',    component:  TwoComponent},
  {path: 'three',  component:  ThreeComponent},
  {path: 'four',   component:  FourComponent},
  {path: 'five',   component:  FiveComponent},
  {path: 'six',    component:  SixComponent},
  {path: 'seven',  component:  SevenComponent},
  {path: 'result', component:  ResultComponent},
  {path: 'legal',  component:  LegalComponent},
  {path: 'further', component: FurtherComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
