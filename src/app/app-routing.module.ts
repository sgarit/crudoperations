
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ListEmployeesComponent } from './employees/list-employees.component';

const routes: Routes = [
  { path: '' , pathMatch: 'full', redirectTo: '/employees-list'},
  { path : 'create-product' , component : ProductCreateComponent},
  { path : 'edit-product/:id' , component : ProductEditComponent},
  { path: 'product-list' , component : ProductListComponent},
  { path: 'employees-list' , component : ListEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
