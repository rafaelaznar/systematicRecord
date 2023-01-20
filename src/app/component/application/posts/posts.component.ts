import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  year: number = null;
  month: number = null;
  day: number = null;

  constructor(
    private oActivatedRoute: ActivatedRoute,
  ) {
    this.year = this.oActivatedRoute.snapshot.params['year'];
    this.month = this.oActivatedRoute.snapshot.params['month'];
    this.day = this.oActivatedRoute.snapshot.params['day'];
    console.log('year', this.year, 'month', this.month, 'day', this.day);
  }

  ngOnInit() {
  }

}
