import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculo-map',
  templateUrl: './veiculo-map.component.html',
  styleUrls: ['./veiculo-map.component.css']
})
export class VeiculoMapComponent implements OnInit {
  
  latitudeScs: number = -29.717119;
  longitudeScs: number = -52.428162;
  zoom: number = 14
  coordenadas: Array<Object>;

  constructor() {
   }

  ngOnInit(): void {
    this.coordenadas = [{
      latitude: -29.713115,
      longitude: -52.437536
    }, {
      latitude: -29.711251,
      longitude: -52.429801
    }, {
      latitude: -29.745130,
      longitude: -52.408733
    }]
  }

}
