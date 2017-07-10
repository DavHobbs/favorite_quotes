import { Component } from '@angular/core';
import { NavParams } from "ionic-angular";
import { Quote } from "../../data/quote.interface";


@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  quoteGroup: {category: string, quotes: Quote[], icon: string};
  constructor (private navParams: NavParams) {}

  ionViewDidLoad() {
    this.quoteGroup = this.navParams.data;

  }
}
