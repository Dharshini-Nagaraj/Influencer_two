import { Component, OnInit } from '@angular/core';

import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  dismiss() {
    this.popoverController.dismiss();
  }
  
}
