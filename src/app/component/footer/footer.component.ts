import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerContent: string = "";

  constructor(
    private oHttp: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.oHttp.get('assets/footer.html', { responseType: 'text' }).subscribe(
      (response: string) => {
        this.footerContent = response;
      }
    )
  }

  getInnerHTMLValue() {
    return this.sanitizer.bypassSecurityTrustHtml(this.footerContent);
  }


}
