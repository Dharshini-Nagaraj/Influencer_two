import { Component, OnInit } from '@angular/core';

import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  dismiss() {
    this.popoverController.dismiss();
  }
}
