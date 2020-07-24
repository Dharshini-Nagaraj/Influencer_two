import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'influencer-settings',
    pathMatch: 'full'
  },
 
  {
    path: 'customer-settings',
    loadChildren: () => import('./customer-settings/customer-settings.module').then( m => m.CustomerSettingsPageModule)
  },
  {
    path: 'influencer-settings',
    loadChildren: () => import('./influencer-settings/influencer-settings.module').then( m => m.InfluencerSettingsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'campaign-details',
    loadChildren: () => import('./campaign-details/campaign-details.module').then( m => m.CampaignDetailsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./explore/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./explore/rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./explore/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./explore/notes/notes.module').then( m => m.NotesPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
