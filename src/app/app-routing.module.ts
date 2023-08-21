import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'a', loadChildren: () => import('./views/root/root.module').then((mod)=>mod.RootModule)},
  { path: 'input', loadChildren: () => import('./views/input-form/input-form.module').then((mod)=>mod.InputFormModule)},
  { path: 'template-form', loadChildren: () => import('./views/template-form/template-form.module').then((mod)=>mod.TemplateFormModule)},
  { path: 'reactive-form', loadChildren: () => import('./views/reactive-form/reactive-form.module').then((mod)=>mod.ReactiveFormModule)},
  { path: 'formatting', loadChildren: () => import('./views/formatting-context/formatting-context.module').then((mod)=>mod.FormattingContextModule)},
  { path: 'css-before', loadChildren: () => import('./views/css-before/css-before.module').then((mod)=>mod.CssBeforeModule)},
  { path: '', loadChildren: () => import('./views/test-page/test-page.module').then((mod) => mod.TestModule)},
  { path: 'linked-list', loadChildren: () => import('./views/linked-list/linked-list.module').then((mod) => mod.InputFormModule)},
  { path: 'grid', loadChildren: () => import('./views/display-grid/display-grid.module').then((mod)=>mod.DisplayGridModule)},
  { path: 'array-methods', loadChildren: () => import('./views/array-methods/array-methods.module').then((mod)=>mod.ArrayMethodsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
