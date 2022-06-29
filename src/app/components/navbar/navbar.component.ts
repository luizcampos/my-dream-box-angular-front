import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
ImagePath: string;

  constructor() { 
    this.ImagePath = '../../../img/logo-in-line-white.png';
  }

  ngOnInit(): void {
  }

}
