import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Proveedor2Provider } from '../../providers/proveedor2/proveedor2';
import { ResinfoPage } from '../resinfo/resinfo';

@Component({
  selector: 'page-mytest',
  templateUrl: 'mytest.html',
})
export class MytestPage {

  listaResidencias

  constructor(public navCtrl: NavController, public proveedor: Proveedor2Provider) {
  }

  ionViewDidLoad() {
    this.proveedor.getUsers()
      .subscribe(
        //(data)=> {this.usuarios = data['results'];},
        (data) => { this.listaResidencias = data; },
        (error) => { console.log(error); }
      )
  }

  resinfo(item) {
    this.navCtrl.push(ResinfoPage, { item: item });
  }
}
