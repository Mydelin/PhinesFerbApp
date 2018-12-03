import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
//import { InAppBrowser } from '@ionic-native/in-app-browser';

//import { InAppBrowser, AppAvailability, Device } from 'ionic-native';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  latitude:number ;
  longitude:number ;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public geolocation: Geolocation, private launchNavigator:LaunchNavigator) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');

    this.geolocation.getCurrentPosition().then(position =>{
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    },error=>{
        console.log('error',error);
    });

  }
  
  navigateLocation(){
    let options: LaunchNavigatorOptions = {
     app: this.launchNavigator.APP.GOOGLE_MAPS,
              start:[this.latitude,this.longitude]
       };
   this.launchNavigator.navigate('London, ON',options)
   .then(success =>{
     console.log(success);
   },error=>{
     console.log(error);
   })
 }

/*
OpenUrl(){
  const browser = this.iab.create('https://ionic.io 108');
  browser.show()
}*/

RealizarLlamada() {
  const alert = this.alertCtrl.create({
    title: 'Desea Llamar?',
    //subTitle: 'Si!',
    buttons: ['Llamar']
  });
  alert.present();
}

}
