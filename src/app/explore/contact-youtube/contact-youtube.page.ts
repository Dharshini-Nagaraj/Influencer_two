import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-contact-youtube',
  templateUrl: './contact-youtube.page.html',
  styleUrls: ['./contact-youtube.page.scss'],
})
export class ContactYoutubePage implements OnInit {
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  dismiss() {
    this.popoverController.dismiss();
  }
}
