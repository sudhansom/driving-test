import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'a', loadChildren: () => import('./views/root/root.module').then((mod)=>mod.RootModule)},
  { path: 'b', loadChildren: () => import('./views/input-form/input-form.module').then((mod)=>mod.InputFormModule)},
  { path: '', loadChildren: () => import('./views/test-page/test-page.module').then((mod) => mod.TestModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
