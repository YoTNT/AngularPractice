import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockfinderComponent } from './components/stockfinder/stockfinder.component';


const routes: Routes = [

  {path:"stock", component:StockfinderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
