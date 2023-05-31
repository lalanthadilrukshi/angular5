/*<!-- Angular project tutorial #4 Sign-Up Form for Seller | Form in E-commerce Project-->*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {BuyComponent} from './buy/buy.component';
import {SellComponent} from './sell/sell.component';
import {DeliveriesComponent} from './deliveries/deliveries.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'

const routes: Routes = [
{
component : HomeComponent,
path:'',
},
{
  component : AboutComponent,
  path:'about', // path is relative to route or http://localhost:4200/
},
{
  component : BuyComponent,
  path:'buy', // path is relative to route or http://localhost:4200/
}, 
{
  component : SellComponent,
  path:'sell', // path is relative to route or http://localhost:4200/
}, 
{
  component : DeliveriesComponent,
  path:'deliveries', // path is relative to route or http://localhost:4200/
}, 
{
  component : LoginComponent,
  path:'login', // path is relative to route or http://localhost:4200/
}, 
{
  component : RegisterComponent,
  path:'register', // path is relative to route or http://localhost:4200/
}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
