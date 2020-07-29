import { Component, OnInit,  OnDestroy } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit,OnDestroy {
  entered:boolean=false;
  constructor(public popoverController: PopoverController) { }
  Category:string;
  subs:Subscription;
  ngOnInit() {
    this.Check();
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  categories = ["Atrs", "Automotive", "Beauty", "Cinema, Theater and Dance", "Comics and Gaming", "DIY and Crafts", "Entrepreneur", "Fashion", "Fitness", "Food", "Health", "Home and Garden", "Lifestyle", "Mommy", "Music", "Pets", "Photography", "Sports", "Tattoo", "Travel", "TV and Media", "Vegan", "Wedding", "Wellness and Nature"];
  value:string='';

  Count(category:string){
    this.value=category;
    this.entered=true;
    this.Category=category;
  }

  Submit(){
    if(this.Category){
      console.log(this.Category);
      this.dismiss();
    }
    else{
      alert('Please Select a Category');
    }
  }

  async Check(){
    this.subs = interval(100).subscribe(dsp => {
      if(this.value !== this.Category){
        this.entered = false;
      }
    });
  }

  dismiss() {
    this.popoverController.dismiss();
  }

}
