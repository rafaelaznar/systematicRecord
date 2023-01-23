import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare let marked: any;
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  year: number = null;
  month: number = null;
  day: number = null;
  nameFile: string = null;

  public contentFromFile: string;
  public parsedContent: string;
  public url = 'assets/posts.md';

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) {
    this.nameFile = this.oActivatedRoute.snapshot.params['namefile'];
    //this.month = this.oActivatedRoute.snapshot.params['month'];
    //this.day = this.oActivatedRoute.snapshot.params['day'];
    console.log('year', this.year, 'month', this.month, 'day', this.day);
  }

  ngOnInit() {
    console.log('nameFile', this.nameFile);
    if (this.nameFile) {
      this.http.get('assets/posts/' + this.nameFile, { responseType: 'text' }).subscribe(
        (response: string) => {
          this.contentFromFile = response;
          this.parsedContent = marked.parse(this.contentFromFile);
        }
      )
    } else {
      this.http.get('assets/posts.md', { responseType: 'text' }).subscribe(
        (response: string) => {
          this.contentFromFile = response;
          this.parsedContent = marked.parse(this.contentFromFile);
        }
      )
    }
  }

}
