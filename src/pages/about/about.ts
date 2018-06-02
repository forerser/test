import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  usuarios

  lista: Array<any> = [
    {
      titulo: 'perro',
      color: '#444'
    },
    {
      titulo: 'gato',
      color: '#999'
    }
  ]

  constructor(public navCtrl: NavController, public proveedor:Proveedor1Provider) {

  }

  ionViewDidLoad() {
    this.proveedor.getData()
    .subscribe(
      (data)=> {this.usuarios = data;},
      (error)=> {console.log(error);}
    )
  }

}
