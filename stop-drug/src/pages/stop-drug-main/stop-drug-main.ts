import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WikiPage } from '../wiki/wiki';
import { NombreDeDrogaPage } from '../nombre-de-droga/nombre-de-droga';
import { ComoAfectaPage } from '../como-afecta/como-afecta';
import { ComoPrevenirPage } from '../como-prevenir/como-prevenir';
import { Starting } from '../starting/starting';

@Component({
  selector: 'page-stop-drug-main',
  templateUrl: 'stop-drug-main.html'
})
export class StopDrugMainPage {

  constructor(public navCtrl: NavController) {
  }
  goToWiki(params){
    if (!params) params = {};
    this.navCtrl.push(WikiPage);
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
  goToStarting(params){
    if (!params) params = {};
    this.navCtrl.push(Starting);
  }
}
