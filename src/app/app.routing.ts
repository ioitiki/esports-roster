import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { TeamNewComponent } from "./team-new/team-new.component";
import { TeamAllComponent } from './team-all/team-all.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamEditComponent } from './team-edit/team-edit.component';


const appRoutes: Routes = [
  {
    path: '',
    component: TeamAllComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'new',
    component: TeamNewComponent
  },
  {
    path: 'teams/:id',
    component: TeamDetailComponent
  },
  {
    path: 'teams/:id/edit',
    component: TeamEditComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
