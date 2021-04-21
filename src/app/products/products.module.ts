import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'more-info', component: MoreInfoComponent},
  {path: ':id', component: ProductComponent},
]

@NgModule({
  declarations: [
    MainComponent,
    MoreInfoComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainComponent,
    MoreInfoComponent,
    ProductComponent,
    ProductsComponent
  ]
})
export class ProductsModule { }
