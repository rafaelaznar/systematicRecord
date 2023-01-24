import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerContent: string = "";

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('assets/footer.html', { responseType: 'text' }).subscribe(
      (response: string) => {
        console.log(response);
        this.footerContent = response;
      }
    )
  }

}
