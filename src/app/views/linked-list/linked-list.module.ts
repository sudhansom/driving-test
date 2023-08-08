import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LinkedListComponent } from "./linked-list.component";


const appRoutes: Routes = [
  {
    path: '',
    component: LinkedListComponent
  }
]

@NgModule({
  declarations: [
    LinkedListComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  exports:[],
  providers: [],
  bootstrap: [],
})
export class InputFormModule {}
