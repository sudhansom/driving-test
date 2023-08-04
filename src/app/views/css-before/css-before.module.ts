import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CssBeforeComponent } from "./css-before.component";


const appRoutes: Routes = [
  {
    path: '',
    component: CssBeforeComponent
  }
]

@NgModule({
  declarations: [
    CssBeforeComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  exports:[],
  providers: [],
  bootstrap: [],
})
export class CssBeforeModule {}
