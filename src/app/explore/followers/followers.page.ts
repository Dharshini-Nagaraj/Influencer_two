import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.page.html',
  styleUrls: ['./followers.page.scss'],
})
export class FollowersPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  dismiss() {
    this.popoverController.dismiss();
  }

}
