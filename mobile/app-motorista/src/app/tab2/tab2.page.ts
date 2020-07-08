import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { WebServiceService } from '../services/web-service.service'
const { Geolocation, App, BackgroundTask } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  latitude: number;
  longitude: number;
  speed: number;
  constructor(private wb: WebServiceService) {}

  async ngOnInit(){
    await this.getLocation();
    this.saveLocalization();
    this.initBackgroundTask();
  }

  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.speed = position.coords.speed ? position.coords.speed : 0
  }

  saveLocalization(){
    this.wb.saveLocalization({
      latitude: this.latitude,
      longitude: this.longitude,
      speed: this.speed
    }).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }

  initBackgroundTask(){
    App.addListener("appStateChange", (state) => {
      if(!state.isActive){
        let taskId = BackgroundTask.beforeExit(async () =>{
          await this.getLocation();
          this.saveLocalization();
        })
        BackgroundTask.finish({taskId})
      }
    })
  }
}

