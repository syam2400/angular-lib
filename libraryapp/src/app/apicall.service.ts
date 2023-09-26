import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor( private http:HttpClient) { }

  token:any;
  header:any;

  getbooks(){
      this.token=localStorage.getItem('token')??""
  console.log(this.token)
  this.header=new HttpHeaders({
    'content-type':"application/json",
    "Authorization":this.token

  })
    
     return this.http.get<any>("http://127.0.0.1:8000/books/",{"headers":this.header})
  }
 postbook(data:any){
  this.token=localStorage.getItem('token')??""
  console.log(this.token)
  this.header=new HttpHeaders({
    'content-type':"application/json",
    "Authorization":this.token

  })
  return this.http.post<any>("http://127.0.0.1:8000/books/",data,{"headers":this.header})
 }
 getbooksbyid(id:any)
 {
  return this.http.get<any>(`http://127.0.0.1:8000/books/${id}`,{"headers":this.header})
 }
 deletebookid(id:any){
  return this.http.delete<any>(`http://127.0.0.1:8000/books/${id}`,{"headers":this.header})
 }
 editbookbyid(id:any,data:any){
  return this.http.put<any>(`http://127.0.0.1:8000/books/${id}/`,data,{"headers":this.header})
 }
 register(data:any)
 {
  return this.http.post<any>("http://127.0.0.1:8000/users/",data)
 }
 login(data:any){

  return this.http.post<any>("http://127.0.0.1:8000/api-token-auth/",data)
 }

}
