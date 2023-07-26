import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TestPageComponent } from "./test-page.component";


const appRoutes: Routes = [
  {
    path: '',
    component: TestPageComponent
  }
]

@NgModule({
  declarations: [
    TestPageComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  exports:[],
  providers: [],
  bootstrap: [],
})
export class TestModule {}
