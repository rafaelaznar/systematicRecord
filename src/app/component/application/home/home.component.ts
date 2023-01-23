import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
declare let marked: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public contentFromFile: string;
  public parsedContent: string;
  public url = 'assets/home.md';

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.http.get(this.url, { responseType: 'text' }).subscribe(
      (response: string) => {
        this.contentFromFile = response;
        this.parsedContent = marked.parse(this.contentFromFile);
      }
    )
  }
}
