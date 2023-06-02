import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Product } from './interface';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';
import { EditinfoComponent } from './editinfo/editinfo.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { FormControl } from '@angular/forms';

const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path:'editinfo/:id', component: EditinfoComponent},
  {path: 'createproduct', component: CreateproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
