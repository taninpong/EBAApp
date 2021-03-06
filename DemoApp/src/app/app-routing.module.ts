import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home-eba',
    loadChildren: () => import('./home-eba/home-eba.module').then(m => m.HomeEBAPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'editprofile-img',
    loadChildren: () => import('./editprofile-img/editprofile-img.module').then(m => m.EditprofileIMGPageModule)
  },
  {
    path: 'editprofile-name',
    loadChildren: () => import('./editprofile-name/editprofile-name.module').then(m => m.EditprofileNAMEPageModule)
  },
  {
    path: 'tournament',
    loadChildren: () => import('./tournament/tournament.module').then(m => m.TournamentPageModule)
  },
  // {
  //   path: 'play-off',
  //   loadChildren: () => import('./play-off/play-off.module').then( m => m.PlayOffPageModule)
  // },
  {
    path: 'resultendtournament',
    loadChildren: () => import('./resultendtournament/resultendtournament.module').then(m => m.ResultendtournamentPageModule)
  },
  {
    path: 'detailendtournament',
    loadChildren: () => import('./detailendtournament/detailendtournament.module').then(m => m.DetailendtournamentPageModule)
  },
  {
    path: 'mtuornament',
    loadChildren: () => import('./mtuornament/mtuornament.module').then(m => m.MTuornamentPageModule)
  },
  {
    path: 'editprofile-name',
    loadChildren: () => import('./editprofile-name/editprofile-name.module').then(m => m.EditprofileNAMEPageModule)
  },
  {
    path: 'tournament',
    loadChildren: () => import('./tournament/tournament.module').then(m => m.TournamentPageModule)
  },
  {
    path: 'create-new-team',
    loadChildren: () => import('./create-new-team/create-new-team.module').then(m => m.CreateNewTeamPageModule)
  },
  {
    path: 'add-team',
    loadChildren: () => import('./add-team/add-team.module').then(m => m.AddTeamPageModule)
  },
  {
    path: 'add-info',
    loadChildren: () => import('./add-info/add-info.module').then(m => m.AddInfoPageModule)
  },
  {
    path: 'dlg-player-info',
    loadChildren: () => import('./dlg-player-info/dlg-player-info.module').then(m => m.DlgPlayerInfoPageModule)
  },
  {
    path: 'matching',
    loadChildren: () => import('./matching/matching.module').then(m => m.MatchingPageModule)
  },
  {
    path: 'match-result',
    loadChildren: () => import('./match-result/match-result.module').then(m => m.MatchResultPageModule)
  },
  {
    path: 'result-preview',
    loadChildren: () => import('./result-preview/result-preview.module').then(m => m.ResultPreviewPageModule)
  },
  {
    path: 'team-modal',
    loadChildren: () => import('./team-modal/team-modal.module').then(m => m.TeamModalPageModule)
  },
  {
    path: 'team-detail',
    loadChildren: () => import('./team-detail/team-detail.module').then(m => m.TeamDetailPageModule)
  },  {
    path: 'search-team',
    loadChildren: () => import('./search-team/search-team.module').then( m => m.SearchTeamPageModule)
  },
  {
    path: 'join-team',
    loadChildren: () => import('./join-team/join-team.module').then( m => m.JoinTeamPageModule)
  },
  {
    path: 'dlg-player-detail',
    loadChildren: () => import('./dlg-player-detail/dlg-player-detail.module').then( m => m.DlgPlayerDetailPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
