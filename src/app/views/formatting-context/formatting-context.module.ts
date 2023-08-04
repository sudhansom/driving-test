import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FormattingContextComponent } from "./formatting-context.component";


const appRoutes: Routes = [
  {
    path: '',
    component: FormattingContextComponent
  }
]

@NgModule({
  declarations: [
    FormattingContextComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  exports:[],
  providers: [],
  bootstrap: [],
})
export class FormattingContextModule {}
