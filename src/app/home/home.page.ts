import { Component } from '@angular/core';
import { Deploy } from 'cordova-plugin-ionic';
import { CheckForUpdateResponse } from 'cordova-plugin-ionic/dist/IonicCordova';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log('test version 2')
  }


}
