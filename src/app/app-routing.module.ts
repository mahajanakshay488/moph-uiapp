import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDrugsComponent } from './Components/all-drugs/all-drugs.component';
import { SearchDrugComponent } from './Components/search-drug/search-drug.component';
import { SubscriptionsComponent } from './Components/subscriptions/subscriptions.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';
import { RefillComponent } from './Components/refill/refill.component';
import { RefillStatusComponent } from './Components/refill-status/refill-status.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginModuleComponent } from './Components/login-module/login-module.component';
import { RefillDueDateComponent } from './Components/refill-due-date/refill-due-date.component';


const routes: Routes = [
  {path:'drugs',component:AllDrugsComponent},
  {path:'search',component:SearchDrugComponent},
  {path:'subscriptions',component:SubscriptionsComponent},
  {path:'subscribe',component:SubscribeComponent},
  {path:'refill',component:RefillComponent},
  {path:'refillStatus',component:RefillStatusComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/loginModule',pathMatch:'full'},
  {path : 'loginModule',component:LoginModuleComponent},
  {path:'refillStatus',component:RefillStatusComponent},
  {path:'refilldue',component:RefillDueDateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
