import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare let marked: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  public contentFromFile: string;
  public parsedContent: string;
  public url = 'assets/projects.md';

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
