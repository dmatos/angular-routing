import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  private updateServerAttr(params: Params) {
    const id = params['id'] === undefined ? 1 : +params['id'];
    this.server = this.serversService.getServer(id);
  }

  ngOnInit() {
    this.updateServerAttr(this.activatedRoute.snapshot.params);
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.updateServerAttr(params);
      });
  }

  onEdit() {
    this.router.navigate(['/servers', this.server.id, 'edit'], {queryParamsHandling: 'preserve'});
  }
}
