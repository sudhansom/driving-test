import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DisplayGridComponent } from "./display-grid.component";


const appRoutes: Routes = [
  {
    path: '',
    component: DisplayGridComponent
  }
]

@NgModule({
  declarations: [
    DisplayGridComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  exports:[],
  providers: [],
  bootstrap: [],
})
export class DisplayGridModule {}
