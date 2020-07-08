import { Component, OnInit } from '@angular/core';
import { WebServiceService } from '../services/web-service.service'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  localizations;
  constructor(
    private wb: WebServiceService
  ) {}
    
  ngOnInit(){
    this.wb.fetchLocalizations()
    .subscribe(data => {
      this.localizations = data
      console.log(data)
    })
  }

  fetchLocalizations(event){
    this.wb.fetchLocalizations()
    .subscribe(
      data => {
        this.localizations = data;
        event.target.complete();
      }
    )
  }
}
