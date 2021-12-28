import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { users } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url :string;
  user :any;
 

  constructor(private http:HttpClient ){
  this.url = "http://localhost:8081/user/allusers";
  }
  ngOnInit(): void {

    this.getAllUsers().subscribe((response)=>{console.log(response); this.user=response;},(err)=>{console.log("error")})

    
  }
 
  
  getAllUsers()
  {
    return this.http.get(this.url);

  }

}
