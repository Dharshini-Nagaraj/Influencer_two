import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { CategoriesPage } from './categories/categories.page';
import { RatingPage } from './rating/rating.page';
import { LocationPage } from './location/location.page';
import { NotesPage } from './notes/notes.page';
import { ContactPage } from './contact/contact.page';
import { FollowersPage } from './followers/followers.page';
import { EngagementPage } from './engagement/engagement.page';
import { ContactYoutubePage } from './contact-youtube/contact-youtube.page';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  segment: string;
  select: string;
  bookmark: boolean;
  value:string = '';
  items:any = [
    ['manov1','@maniv1','270k','13.0%',''],
    ['sree','@sree','170k','4.2%',''],
    ['virat Fallon','@virat','190k','3.0%',''],
    ['Jimmy Kimmel','@Jim','177k','5.7%',''],
    ['manov1','@maniv1','270k','13.0%',''],
    ['sree','@sree','170k','4.2%',''],
    ['virat Fallon','@virat','190k','3.0%',''],
    ['Jimmy Kimmel','@Jim','177k','5.7%','']
  ];
  youtubes:any=[
    
    ['manov1','@maniv1','270k','620K','United States'],
    ['sree','@sree','170M','1B','Spain'],
    ['virat Fallon','@virat','190M','3B','Sweden'],
    ['Jimmy Kimmel','@Jim','177K','500K','India']
  ];

  bookmark2: boolean;
  constructor( public popoverController: PopoverController, public toastController: ToastController)
   {
      this.segment = 'forYou';
      this.select = 'instagram';
    }
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
async presentContact() {
  const popover = await this.popoverController.create({
    component: ContactPage,
  });
  return await popover.present();
}
async presentContactYoutube() {
  const popover = await this.popoverController.create({
    component: ContactYoutubePage,
  });
  return await popover.present();
}
  async presentPopover() {
    const popover = await this.popoverController.create({
      component: CategoriesPage,
    });
    return await popover.present();
  }
  async presentFollower() {
    const popover = await this.popoverController.create({
      component:FollowersPage,
    });
    return await popover.present();
  }  
  async presentEngage() {
    const popover = await this.popoverController.create({
      component:EngagementPage,
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
