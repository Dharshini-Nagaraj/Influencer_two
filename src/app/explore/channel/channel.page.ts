import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-channel',
  templateUrl: './channel.page.html',
  styleUrls: ['./channel.page.scss'],
})
export class ChannelPage implements OnInit {
 
  constructor(public popoverController: PopoverController) {  
  }
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };
  ngOnInit() {
   
  }
  dismiss() {
    this.popoverController.dismiss();
  }
  
  
}
