import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app-components/header/header.component';
import { FooterComponent } from './app-components/footer/footer.component';
import { DashboardComponent } from './app-templates/dashboard/dashboard.component';
import { UserModule } from './app-user/user/user.module';
import { LoaderComponent } from './app-components/loader/loader.component';
import { AddUpdateProductsComponent } from './app-templates/add-update-products/add-update-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoaderComponent,
    AddUpdateProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    UserModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
