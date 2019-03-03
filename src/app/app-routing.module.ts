import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { VariantsComponent } from './variants/variants.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'Variants',component:VariantsComponent},
  {path:'blog/:id/:**',component:BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
