import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController) {

  }

  login(){
    // Your app login API web service call triggers
    this.navCtrl.push(TabsPage, {}, {animate: false});
  }

}

