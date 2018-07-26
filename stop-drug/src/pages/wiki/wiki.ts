import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NombreDeDrogaPage } from '../nombre-de-droga/nombre-de-droga';
import { ComoAfectaPage } from '../como-afecta/como-afecta';
import { ComoPrevenirPage } from '../como-prevenir/como-prevenir';

@Component({
  selector: 'page-wiki',
  templateUrl: 'wiki.html'
})
export class WikiPage {

  constructor(public navCtrl: NavController) {
  }
  goToNombreDeDroga(params){
    if (!params) params = {};
    this.navCtrl.push(NombreDeDrogaPage);
  }
  goToComoAfecta(params){
    if (!params) params = {};
    this.navCtrl.push(ComoAfectaPage);
  }
  goToComoPrevenir(params){
    if (!params) params = {};
    this.navCtrl.push(ComoPrevenirPage);
  }
}
