import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { TemplateFormComponent } from "./template-form.component";


const appRoutes: Routes = [
  {
    path: '',
    component: TemplateFormComponent
  }
]

@NgModule({
  declarations: [
    TemplateFormComponent,

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
export class TemplateFormModule {}
