import { Component, OnInit } from '@angular/core';
import { DecodeService } from 'src/app/service/decode.service';
import { EmitEvent, Events, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  strUserName: string = "";

  constructor(
    private oSessionService: SessionService,
    private oDecodeService: DecodeService
  ) {
    this.strUserName = oSessionService.getUserName();
  }

  ngOnInit() {
    this.oSessionService.on(Events.login).subscribe(
      (data: EmitEvent) => {
        this.strUserName = this.oSessionService.getUserName();
        console.log("evento login!!", data.event, data.token);
        console.log(this.oDecodeService.parseJwt(data.token));
      });
    this.oSessionService.on(Events.logout).subscribe(
      (data: EmitEvent) => {
        this.strUserName = '';
        console.log("evento logout!!", data.event, data.token);
      });

  }

}
