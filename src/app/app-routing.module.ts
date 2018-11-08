import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'enter',
        loadChildren: './+enter/enter.module#EnterModule'
      },
      {
        path: 'thankyou',
        loadChildren: './+thankyou/thankyou.module#ThankyouModule'
      },
      {
        path: '**',
        redirectTo: '/enter'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
