import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerContent: string;
  
  constructor(private oHttp: HttpClient,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.oHttp.get('assets/header.html', { responseType: 'text' }).subscribe(
      (response: string) => {        
        this.headerContent = response;
      }
    )
  }

  getInnerHTMLValue(){
    return this.sanitizer.bypassSecurityTrustHtml(this.headerContent);
  }

}
