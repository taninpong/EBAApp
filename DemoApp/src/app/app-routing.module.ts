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
  },  {
    path: 'resultendtournament',
    loadChildren: () => import('./resultendtournament/resultendtournament.module').then( m => m.ResultendtournamentPageModule)
  },
  {
    path: 'detailendtournament',
    loadChildren: () => import('./detailendtournament/detailendtournament.module').then( m => m.DetailendtournamentPageModule)
  },
  {
    path: 'matching',
    loadChildren: () => import('./matching/matching.module').then( m => m.MatchingPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
