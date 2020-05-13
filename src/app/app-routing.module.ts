import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductividadComponent } from "./components/productividad/productividad.component";
const routes: Routes = [
  {path: '', component: ProductividadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
