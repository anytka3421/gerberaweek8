import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
// import { CatalogComponent } from './catalog/catalog.component';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { EditinfoComponent } from './editinfo/editinfo.component';
import { CreateproductComponent } from './createproduct/createproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ProductComponent,
    // CatalogComponent,
    FilterComponent,
    FooterComponent,
    AdminComponent,
    LoginComponent,
    EditinfoComponent,
    CreateproductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
