import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  data:any;
  constructor(private getapi:ApicallService,private route:Router){}

  ngOnInit(){

    this.getapi.getbooks().subscribe((res) => {
      this.data=res;
      console.log(this.data);
    })

  }
detail(id:any){
  
  this.route.navigate(['detail/',id])
}
edit(id:any){
  this.route.navigate(['edit/',id])
}
delete(id:any)
{
  console.log(id);
  if(confirm("are you sure you want to delete"))
  {
    this.getapi.deletebookid(id).subscribe((res)=>{
      this.ngOnInit()
    })}
}


}
  