import { Router } from '@angular/router';
import { FireService } from './../fire.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public fire: FireService,
    public router: Router
  ) { }

  ngOnInit() {

  }

  logout(){
    this.fire.logout()
      .then(_ => {
        this.router.navigate(['login'])
      })
  }

}
