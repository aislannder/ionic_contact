import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {PeopleService} from '../../providers/people-service';

import { PeopleDetail } from '../../pages/people-detail/people-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items:any;

  constructor(public navCtrl: NavController, private peopleService:PeopleService) {

  }

  ngOnInit(){
    this.peopleService.getPeoples().subscribe(res => {
      this.items = res.results;
    })
  }

  peopleDetail(people){
    this.navCtrl.push(PeopleDetail, {
      people:people
    })
  }

  // showAlert(){
  //   let alert = this.alertCtrl.create({
  //     title:'New friend',
  //     subTitle: 'Test',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }

}
