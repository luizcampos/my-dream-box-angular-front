import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goal } from '../goal';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/goals');
  }

  insertData(data:Goal){
    return this.httpClient.post('http://127.0.0.1:8000/api/addGoal', data);
  }

  deletetData(id:any){
    console.log("id"+id);
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteGoal/'+id);
  }

  getGoalById(id:any){
    console.log("id"+id);
    return this.httpClient.get('http://127.0.0.1:8000/api/goal/'+id);
  }

  updateGoal(id:any,data:Goal){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateGoal/'+id,data);
  }
    //USUÁRIO

    getUser(){
      return this.httpClient.get('http://127.0.0.1:8000/api/users');
    }
  
    insertDataUser(data:User){
      return this.httpClient.post('http://127.0.0.1:8000/api/addUser', data);
    }
  
    deletetDataUser(id:any){
      console.log("id"+id);
      return this.httpClient.delete('http://127.0.0.1:8000/api/deleteUser/'+id);
    }
  
    getUserById(id:any){
      //console.log("id"+id);
      return this.httpClient.get('http://127.0.0.1:8000/api/users/'+id);
    }
  
    updateUser(id:any,data:User){
      return this.httpClient.put('http://127.0.0.1:8000/api/updateUser/'+id,data);
    }
}