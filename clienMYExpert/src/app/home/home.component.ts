import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('menu', {static: true}) public menu: any;
  user:User=null;
  constructor(private route: Router,private userService: UsersService) { 
  
  }
  ngOnInit(): void {
    this.userService.getLoggedInName.subscribe(user => {console.log(user);this.user =user});
    console.log("start from here")
    this.user = JSON.parse(localStorage.getItem("user"));
    
    console.log(this.user)
  }
  logOut() {
    localStorage.setItem("user", null);
    this.user=null;
    this.route.navigateByUrl("/about");
  }

  

}
