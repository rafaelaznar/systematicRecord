import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { baseURL, editionBaseURL } from 'src/environments/environment';

declare let marked: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public namefile: string;
  public namefolder: string;
  public namefolder1: string;
  public namefolder2: string;
  public base: string;
  public editionBase: string;
  public route: string = "";
  public editroute: string = "";
  public contentFromFile: string;
  public parsedContent: string = null;
  public headerContent: string;

  constructor(
    private http: HttpClient,
    private oActivatedRoute: ActivatedRoute,
  ) {
    this.namefile = this.oActivatedRoute.snapshot.params['namefile'];
    this.namefolder = this.oActivatedRoute.snapshot.params['namefolder'];
    this.namefolder1 = this.oActivatedRoute.snapshot.params['namefolder1'];
    this.namefolder2 = this.oActivatedRoute.snapshot.params['namefolder2'];
    this.base = baseURL;
    this.editionBase= editionBaseURL;
    if (this.namefolder1 && this.namefolder2 && this.namefile) {
      this.route = this.base + this.namefolder1 + "/" + this.namefolder2 + '/' + this.namefile;
      this.editroute = this.editionBase + this.namefolder1 + "/" + this.namefolder2 + '/' + this.namefile;
    } else {
      if (this.namefolder && this.namefile) {
        this.route = this.base + this.namefolder + '/' + this.namefile;
        this.editroute = this.editionBase + this.namefolder + '/' + this.namefile;
      } else {
        if (this.namefile) {
          this.route = this.base + this.namefile;
          this.editroute = this.editionBase + this.namefile
        } else {
          this.route = this.base + "home.md";
          this.editroute = this.editionBase + "home.md";
        }
      }
    }
  }

  ngOnInit() {
    this.http.get(this.route, { responseType: 'text' }).subscribe(
      (response: string) => {
        this.contentFromFile = response;
        this.parsedContent = marked.parse(this.contentFromFile);
      }
    )
    // headers or footers can be also loaded from external files
    /*
    this.http.get('assets/header.html', { responseType: 'text' }).subscribe(
      (response: string) => {
        this.headerContent = response;
      }
    )
    */
  }

}
