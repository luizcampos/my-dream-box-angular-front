import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/goal';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  
goals:any;
goal=new Goal;
ImagePath: string;

  constructor(private dataService:DataService) { 
    this.ImagePath = '../../../img/logo-in-line-white.png';
  }

  ngOnInit(): void {
    this.getGoalData();
  }

  getGoalData(){
    this.dataService.getData().subscribe(res =>{
      this.goals = res;
    })
  }

  insertData(){
    this.dataService.insertData(this.goal).subscribe(res =>{
      this.getGoalData();
    })
  }

  deletetData(id:any){
    this.dataService.deletetData(id).subscribe(res =>{
      this.getGoalData();
    })
  }
}
