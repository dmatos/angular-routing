import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  // this activatedRoute mf holds the current user, for example
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser(this.activatedRoute.snapshot.params);
    // code above only loads on initialization
    // yeah! the route is an observable
    // subscribe to route.params to load changes when routing from a route to itself with different params
    this.activatedRoute.params
      .subscribe( (params: Params) => {
        this.loadUser(params);
      });
  }

  loadUser(params: Params) {
    this.user = {
      id: params['id'] === undefined ? 1 : params['id'],
      name: params['id'] === undefined ? 'Max' : params['name'],
    };
    console.log(params);
    console.log(this.user);
  }
}
