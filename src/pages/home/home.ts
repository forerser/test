import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { MasinfoPage } from '../masinfo/masinfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alerta: AlertController) {

  }

  masinfo() {
    this.navCtrl.push(MasinfoPage);
  }

  doAlert() {
    let alert = this.alerta.create({
      title: 'New Friend!',
      message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
      buttons: ['Ok']
    });
    alert.present();
  }
  doAlert1() {
    let alert1 = this.alerta.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    alert1.present();
  }

}
