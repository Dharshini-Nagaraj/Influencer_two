import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-views',
  templateUrl: './views.page.html',
  styleUrls: ['./views.page.scss'],
})
export class ViewsPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  dismiss() {
    this.popoverController.dismiss();
  }
}
