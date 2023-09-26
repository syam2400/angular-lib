import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  constructor(private regapi:ApicallService,private route:Router){}

  data={
    username:'',
    password:''
  }

  onSubmit()
  {
   this.regapi.register(this.data).subscribe((res)=>
   {
    console.log(res);
    this.route.navigate([''])
   })
  }

}
