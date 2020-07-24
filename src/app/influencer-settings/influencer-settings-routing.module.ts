import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfluencerSettingsPage } from './influencer-settings.page';

const routes: Routes = [
  {
    path: '',
    component: InfluencerSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfluencerSettingsPageRoutingModule {}
