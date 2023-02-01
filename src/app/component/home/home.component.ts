import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare let marked: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public namefile: string;
  public namefolder: string;
  public route: string = "";
  public contentFromFile: string;
  public parsedContent: string = null;
  public headerContent: string;

  constructor(
    private http: HttpClient,
    private oActivatedRoute: ActivatedRoute,
  ) {
    this.namefile = this.oActivatedRoute.snapshot.params['namefile'];
    this.namefolder = this.oActivatedRoute.snapshot.params['namefolder'];
    if (this.namefolder && this.namefile) {
      this.route = "assets/" + this.namefolder + '/' + this.namefile;
    } else {
      if (this.namefile) {
        this.route = "assets/" + this.namefile;
      } else {
        this.route = "assets/home.md";
      }
    }
  }

  ngOnInit() {
    this.http.get('assets/header.html', { responseType: 'text' }).subscribe(
      (response: string) => {
        this.headerContent = response;
      }
    )
    this.http.get(this.route, { responseType: 'text' }).subscribe(
      (response: string) => {
        this.contentFromFile = response;
        this.parsedContent = marked.parse(this.contentFromFile);
      }
    )
  }
  
}
