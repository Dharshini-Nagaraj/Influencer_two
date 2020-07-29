import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactYoutubePageRoutingModule } from './contact-youtube-routing.module';

import { ContactYoutubePage } from './contact-youtube.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactYoutubePageRoutingModule
  ],
  declarations: [ContactYoutubePage]
})
export class ContactYoutubePageModule {}
