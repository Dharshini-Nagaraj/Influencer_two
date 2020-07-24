import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  private changePassword : FormGroup;
  constructor(public toastController: ToastController, private formBuilder: FormBuilder) 
  { 
    this.changePassword = this.formBuilder.group({
      oldPassword: ['',],
      newPassword: ['', ],      
      reNewPassword: ['', ],
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
