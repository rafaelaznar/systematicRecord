import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare let marked: any;

@Component({
  selector: 'app-daw',
  templateUrl: './daw.component.html',
  styleUrls: ['./daw.component.css']
})
export class DawComponent implements OnInit {

  public content: string;
  public mcontent: string;


  constructor(
    private http: HttpClient,
  ) { }



  ngOnInit() {






    this.http.get('assets/daw.md', { responseType: 'text' }).subscribe(
      (response: string) => {
        this.content = response;
        console.log('2:', response);
        this.mcontent = marked.parse(this.content);


      }
    )




  }

}
