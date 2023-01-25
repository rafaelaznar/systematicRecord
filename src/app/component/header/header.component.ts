import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerContent: string;

  constructor(private oHttp: HttpClient) { }

  ngOnInit() {
    this.oHttp.get('assets/header.html', { responseType: 'text' }).subscribe(
      (response: string) => {
        this.headerContent = response;
      }
    )
  }

}
