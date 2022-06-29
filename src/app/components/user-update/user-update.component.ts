import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
id:any;
data:any;
user = new User();

  constructor(
    private route:ActivatedRoute, 
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUser();
  }

  getUser(){
    this.dataService.getUserById(this.id).subscribe(
      res => {
        //console.log("AAA: " + res);
        this.data = res;
        this.user = this.data;
      }
    )
  }

  updateUser(){
    this.dataService.updateUser(this.id,this.user).subscribe(
      res => {

      }
    )
  }

}
