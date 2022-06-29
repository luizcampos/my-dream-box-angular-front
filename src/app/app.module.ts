import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsComponent } from './components/goals/goals.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { FormsModule } from '@angular/forms';
import { GoalUpdateComponent } from './components/goal-update/goal-update.component';
import { UsersComponent } from './components/users/users.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';

const appRoutes: Routes = [
  {
    path:'', component:UsersComponent
  },
  {
    path:'update/:id', component:UserUpdateComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    NavbarComponent,
    GoalUpdateComponent,
    UsersComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
