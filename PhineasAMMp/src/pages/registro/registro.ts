import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  Registro: FormGroup;

  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}
  constructor( public navCtrl: NavController,public formBuilder: FormBuilder) {
    this.Registro = this.crearRegistro();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  saveData(){
    console.log(this.Registro.value);
    this.navCtrl.push(HomePage);
  }

  private crearRegistro(){
    return this.formBuilder.group({
      names: ['', Validators.required],
      lastNames: ['', Validators.required],
      fechaNac: ['', Validators.required],
      gender: ['', Validators.required],  
    });
  }
  


}
