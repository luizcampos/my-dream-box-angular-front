import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/goal';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:any;
user=new User;

constructor(private dataService:DataService) { 
}

ngOnInit(): void {
  this.getUserData();
}

getUserData(){
  this.dataService.getUser().subscribe(res =>{
    this.users = res;
    console.log(res);
  })
}

insertDataUser(){
  this.dataService.insertDataUser(this.user).subscribe(res =>{
    this.getUserData();
  })
}

deletetDataUser(id:any){
  this.dataService.deletetDataUser(id).subscribe(res =>{
    this.getUserData();
  })
}
}
