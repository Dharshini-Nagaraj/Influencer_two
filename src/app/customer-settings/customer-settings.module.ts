import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerSettingsPageRoutingModule } from './customer-settings-routing.module';

import { CustomerSettingsPage } from './customer-settings.page';

import { MaterialModule } from '../material.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    CustomerSettingsPageRoutingModule
  ],
  declarations: [CustomerSettingsPage]
})
export class CustomerSettingsPageModule {}
