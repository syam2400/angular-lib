import { trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isAuthenticated=false;
  ngOnInit(){
    if("token" in localStorage)
    {
      this.isAuthenticated=true;
    }
    else{
      this.isAuthenticated=false;
    }

  }


  logout(){
    localStorage.clear()
    console.log(localStorage.getItem('token'))
    this.ngOnInit()
  }

}
