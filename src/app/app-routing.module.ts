import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './about/about.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PlatesModule } from './plates/plates.module';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => AboutModule,
  },
  {
    path: 'dashboard',
    loadChildren: () => DashboardModule,
  },
  {
    path: 'plates',
    loadChildren: () => PlatesModule,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
