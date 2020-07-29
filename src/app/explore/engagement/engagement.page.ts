import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.page.html',
  styleUrls: ['./engagement.page.scss'],
})
export class EngagementPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  dismiss() {
    this.popoverController.dismiss();
  }
}
