import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home-eba',
    loadChildren: () => import('./home-eba/home-eba.module').then( m => m.HomeEBAPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'editprofile-img',
    loadChildren: () => import('./editprofile-img/editprofile-img.module').then( m => m.EditprofileIMGPageModule)
  },
  {
    path: 'editprofile-name',
    loadChildren: () => import('./editprofile-name/editprofile-name.module').then( m => m.EditprofileNAMEPageModule)
  },
  {
    path: 'tournament',
    loadChildren: () => import('./tournament/tournament.module').then( m => m.TournamentPageModule)
  },
  {
    path: 'play-off',
    loadChildren: () => import('./play-off/play-off.module').then( m => m.PlayOffPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
