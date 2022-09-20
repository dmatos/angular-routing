import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data, Params} from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.errorMessage = this.activatedRoute.snapshot.data['message'];
    this.activatedRoute.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    });
  }

}