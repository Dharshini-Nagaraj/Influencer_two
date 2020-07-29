import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactYoutubePage } from './contact-youtube.page';

const routes: Routes = [
  {
    path: '',
    component: ContactYoutubePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactYoutubePageRoutingModule {}
