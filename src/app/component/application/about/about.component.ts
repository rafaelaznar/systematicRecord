import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare let marked: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public contentFromFile: string;
  public parsedContent: string;
  public url = 'assets/about.md';

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
