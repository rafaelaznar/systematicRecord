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
  public contentFromFile: string;
  public parsedContent: string;

  constructor(
    private http: HttpClient,
    private oActivatedRoute: ActivatedRoute,
  ) {
    this.namefile = this.oActivatedRoute.snapshot.params['namefile'];

  }

  ngOnInit() {
    this.http.get('assets/' + this.namefile, { responseType: 'text' }).subscribe(
      (response: string) => {
        this.contentFromFile = response;
        this.parsedContent = marked.parse(this.contentFromFile);
      }
    )
  }
}
