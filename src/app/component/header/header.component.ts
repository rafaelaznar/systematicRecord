import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  strUrl: String = "";
  menuContent: string = "";

  constructor(private http: HttpClient, private oRouter: Router) {
    this.oRouter.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.strUrl = ev.url;
      }
    })
  }

  ngOnInit() {
    this.http.get('assets/header.html', { responseType: 'text' }).subscribe(
      (response: string) => {
        console.log(response);
        this.menuContent = response;
      }
    )
  }

}
