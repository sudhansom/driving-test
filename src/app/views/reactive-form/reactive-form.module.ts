import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ReactiveFormComponent } from "./reactive-form.component";


const appRoutes: Routes = [
  {
    path: '',
    component: ReactiveFormComponent
  }
]

@NgModule({
  declarations: [
    ReactiveFormComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
  ],
  exports:[],
  providers: [],
  bootstrap: [],
})
export class ReactiveFormModule {}
