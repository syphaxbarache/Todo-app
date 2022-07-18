import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { AllComponent } from './all/all.component';
import { CompletedComponent } from './completed/completed.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes =[
  { path:'active' ,component : ActiveComponent},
  { path:'all' ,component : AllComponent},
  { path:'completed' ,component : CompletedComponent},
  { path:'' , redirectTo:'all', pathMatch : 'full'},
  { path:'**' , component:PageNotFoundComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
