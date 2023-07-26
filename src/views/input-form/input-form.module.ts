import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { InputFormComponent } from "./input-form.component";


const appRoutes: Routes = [
  {
    path: '',
    component: InputFormComponent
  }
]

@NgModule({
  declarations: [
    InputFormComponent,

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
