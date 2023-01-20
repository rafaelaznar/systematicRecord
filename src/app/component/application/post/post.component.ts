import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id: number = null;
  constructor(
    private oActivatedRoute: ActivatedRoute,
  ) {
    this.id = this.oActivatedRoute.snapshot.params['id'];

  }

  ngOnInit() {
  }

}
