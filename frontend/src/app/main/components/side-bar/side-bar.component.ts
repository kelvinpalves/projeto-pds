import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  isActive(page: string) {
    let aux = this.router.url;
    let list = aux.split("/");

    return "/" + list[1] == page;
  }

}
