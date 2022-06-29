import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalUpdateComponent } from './components/goal-update/goal-update.component';
import { GoalsComponent } from './components/goals/goals.component';

const routes: Routes = [
  {
    path: "http://localhost:4200/",
    component: GoalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
