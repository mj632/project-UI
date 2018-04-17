import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './app-templates/dashboard/dashboard.component';
import { AddUpdateProductsComponent } from './app-templates/add-update-products/add-update-products.component';

const routes: Routes = [
	{ path: '', component: DashboardComponent},
	{ path: 'products-add-update', component: AddUpdateProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
