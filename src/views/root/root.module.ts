import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RootComponent } from "./root.component";


const appRoutes: Routes = [
  {
    path: '',
    component: RootComponent
  }
]

@NgModule({
  declarations: [
    RootComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  exports:[],
  providers: [],
  bootstrap: [],
})
export class RootModule {}
