import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainGridComponent} from "./components/main-grid/main-grid.component";

const routes: Routes = [
  { path: '', redirectTo: 'option-1', pathMatch: 'full' },
  { path: 'option-1', component: MainGridComponent },
  { path: 'option-2', component: MainGridComponent },
  { path: 'option-3', component: MainGridComponent },
  { path: 'option-4', component: MainGridComponent },
  { path: 'option-5', component: MainGridComponent },
  { path: 'option-6', component: MainGridComponent },
  { path: 'option-7', component: MainGridComponent },
  { path: 'option-8', component: MainGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
