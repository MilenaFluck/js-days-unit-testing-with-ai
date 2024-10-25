import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DinosaurListComponent } from './dinosaur-list/dinosaur-list.component';
import { ParkListComponent } from './park-list/park-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dino', component: DinosaurListComponent },
  { path: 'parks', component: ParkListComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
