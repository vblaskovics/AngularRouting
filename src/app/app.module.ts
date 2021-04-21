import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { LoggedInGuardService } from './services/logged-in-guard.service';
import { Protected2Component } from './protected2/protected2.component';
import { RouterGuardService } from './services/router-guard.service';

import { routes as productsRoutes, ProductsModule } from './products/products.module';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'login', component: LoginComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGuardService],
  },
  {
    path: 'protected2',
    component: Protected2Component,
    canActivate: [RouterGuardService],
  },

  {
    path: 'products',
    component: ProductsComponent,
    children: productsRoutes
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ProtectedComponent,
    Protected2Component,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
