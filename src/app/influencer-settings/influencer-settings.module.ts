import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfluencerSettingsPageRoutingModule } from './influencer-settings-routing.module';

import { InfluencerSettingsPage } from './influencer-settings.page';

import { MaterialModule } from '../material.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    InfluencerSettingsPageRoutingModule
  ],
  declarations: [InfluencerSettingsPage]
})
export class InfluencerSettingsPageModule {}
