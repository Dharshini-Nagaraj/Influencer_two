import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  private editProfile : FormGroup;
  constructor(public toastController: ToastController, private formBuilder: FormBuilder) 
  { 
    this.editProfile = this.formBuilder.group({
      userName: ['',],
      phoneNumber: ['', ],
    });
  }

  ngOnInit() {
  }
  async showMessageSoon() {
    const toast = await this.toastController.create({
      message: 'Successfully saved!!!',
      duration: 2000
    });
    toast.present();
  }


}
