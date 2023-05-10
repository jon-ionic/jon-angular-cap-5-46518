import { Injectable } from '@angular/core';
import { Deploy } from 'cordova-plugin-ionic';

@Injectable({
  providedIn: 'root'
})
export class UpdateserviceService {

  constructor() { 
    console.log("running update service")
    this.update()
  }
  async update(): Promise<void> {
    console.log('checking for update...')
    const update = await Deploy.checkForUpdate()
    console.log(update)
    console.log('reloading...')
    await Deploy.reloadApp()
  }
}
