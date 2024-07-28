import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/body/home/home.component';
import { CompCommComponent } from './components/body/comp-comm/comp-comm.component';
import { RxjsComponent } from './components/body/rxjs/rxjs.component';
import { RoutingComponent } from './components/body/routing/routing.component';
import { ReactiveFormsComponent } from './components/body/reactive-forms/reactive-forms.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'compComm', component:CompCommComponent},
  {path:'rxjs', component:RxjsComponent},
  {path:'routing', component:RoutingComponent},
  {path:'reactiveForms', component:ReactiveFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
