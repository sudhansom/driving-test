import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ArrayMethodsComponent } from "./array-methods.component";


const appRoutes: Routes = [
  {
    path: '',
    component: ArrayMethodsComponent
  }
]

@NgModule({
  declarations: [
    ArrayMethodsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  exports:[],
  providers: [],
  bootstrap: [],
})
export class ArrayMethodsModule {}
