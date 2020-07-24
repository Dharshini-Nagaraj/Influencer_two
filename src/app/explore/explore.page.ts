import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { CategoriesPage } from './categories/categories.page';
import { RatingPage } from './rating/rating.page';
import { LocationPage } from './location/location.page';
import { NotesPage } from './notes/notes.page';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  segment: string;
  bookmark: boolean;
  
  bookmark2: boolean;
  constructor( public popoverController: PopoverController, public toastController: ToastController) {  this.segment = 'forYou';}
 async book(){
   this.bookmark =  true;
   const toast = await this.toastController.create({
    message: 'Influencer Saved!!',
    duration: 2000,
    color: 'success',
  });
  toast.present();
 }
 async book2(){
  this.bookmark =  false;
  const toast = await this.toastController.create({
    message: 'Influencer Unsaved!!',
    duration: 2000,
    color: 'danger',
  });
  toast.present();

}
  async presentPopover() {
    const popover = await this.popoverController.create({
      component: CategoriesPage,
    });
    return await popover.present();
  }
  async presentNotes() {
    const popover = await this.popoverController.create({
      component: NotesPage,
    });
    return await popover.present();
  }
  async presentLocation() {
    const popover = await this.popoverController.create({
      component: LocationPage,
    });
    return await popover.present();
  }
  async presentRating() {
    const popover = await this.popoverController.create({
      component: RatingPage,
    });
    return await popover.present();
  }
  ngOnInit() {
  }

}
