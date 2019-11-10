import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
  constructor(public http:HttpClient) 
  { 

  }

  GetData()
  {
    return this.http.get("http://localhost:4000/employees");
  }

  AddData(emp:any)
  {
   return this.http.post("http://localhost:4000/employees",emp);

  }

  delete(No:any)
  {
    return this.http.delete("http://localhost:4000/employees/"+No);

  }

  getDataById(id:any)
  {
    return this.http.get("http://localhost:4000/employees/"+id);

  }
  Update(emp:any)
  {
    return this.http.put("http://localhost:4000/employees/"+emp.id,emp);

  }

}
