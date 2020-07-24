import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePasswordPageRoutingModule } from './change-password-routing.module';

import { ChangePasswordPage } from './change-password.page';
import {MaterialModule} from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,MaterialModule,
    ChangePasswordPageRoutingModule
  ],
  declarations: [ChangePasswordPage]
})
export class ChangePasswordPageModule {}
