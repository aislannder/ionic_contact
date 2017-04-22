import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PeopleDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-people-detail',
  templateUrl: 'people-detail.html',
})
export class PeopleDetail {

  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('people');
  }


}
