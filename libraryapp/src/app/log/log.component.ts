import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  constructor(private logapi:ApicallService,private route:Router){}

  data={
    username:'',
    password:''
  }
onSubmit(){

  this.logapi.login(this.data).subscribe((res)=>
  {
    // console.log(res);
    
    localStorage.setItem('token',"Token "+res.token)
    console.log(localStorage.getItem('token'));
    this.route.navigate([""])
   
     
      
     })
  }
}

