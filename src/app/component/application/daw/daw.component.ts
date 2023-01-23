import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare let marked: any;

@Component({
  selector: 'app-daw',
  templateUrl: './daw.component.html',
  styleUrls: ['./daw.component.css']
})
export class DawComponent implements OnInit {

  public contentFromFile: string;
  public parsedContent: string;
  public url = 'assets/daw.md';

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
