import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Goal } from 'src/app/goal';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-goal-update',
  templateUrl: './goal-update.component.html',
  styleUrls: ['./goal-update.component.css']
})
export class GoalUpdateComponent implements OnInit {
id:any;
data:any;
goal = new Goal();

  constructor(
    private route:ActivatedRoute, 
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.geGoal();
  }

  geGoal(){
    this.dataService.getGoalById(this.id).subscribe(
      res => {
        this.data = res;
        this.goal = this.data;
      }
    )
  }

  updateGoal(){
    this.dataService.updateGoal(this.id,this.goal).subscribe(
      res => {

      }
    )
  }

}
