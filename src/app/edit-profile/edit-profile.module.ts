import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfilePageRoutingModule } from './edit-profile-routing.module';

import { EditProfilePage } from './edit-profile.page';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    EditProfilePageRoutingModule
  ],
  declarations: [EditProfilePage]
})
export class EditProfilePageModule {}
