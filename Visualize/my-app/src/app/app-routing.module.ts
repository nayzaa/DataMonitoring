import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {VisualizeComponent} from './visualize/visualize.component';
import {DetailsComponent} from './visualize/details/details.component';

const appRoutes: Routes = [
  {path: 'visualize', component: VisualizeComponent},
  {path: 'details', component: DetailsComponent},
  {
    path: '',
    redirectTo: '/visualize',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
