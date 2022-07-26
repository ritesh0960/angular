import { Injectable } from '@angular/core';
import { Idept } from './idept';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { catchError, Observable ,throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeptService {
  url='http://localhost:33005/api/dept/';
  //here we are passing header information and content type information
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})};//this is required for post method
  
  //in constructor we are injecting httpclient because we donot need to create object of httpclient everytime,whenever we are calling /making object of httpclient it is auto instanised

constructor(private httpclient:HttpClient){}

//here we are calling the http client object and passing the url and relevant data to the servie/webapi as a result of which listdept method will be called from the controller
getDeptList():Observable<any>{
  return this.httpclient.get<any[]>(this.url+'ListDept');
}
getDept(id:number):Observable<Idept>{
  return this.httpclient.get<Idept>(this.url+'ListDept/'+id).pipe(catchError(this.handleError));
}
addDept(dept:Idept):Observable<Idept>{
   return this.httpclient.post<Idept>(this.url+"AddDept",dept,this.httpOptions).pipe(catchError(this.handleError));
}

editDept(dept:Idept):Observable<Idept>{
  return this.httpclient.put<Idept>(this.url+"EditDept/"+dept.id,dept,this.httpOptions).pipe(catchError(this.handleError));
};
handleError(error: HttpErrorResponse){
  let errorMessage='';
  errorMessage=error.status+'\n'+error.statusText+'\n'+error.error;
  alert(errorMessage);
  return throwError(errorMessage);
}


}
