import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
  
  employees;
  
  constructor(public router:Router,public service:DataService) 
  {
    this.getData();
  }

  getData(){
    let State= this.service.GetData();
    State.subscribe((result)=>{
      this.employees=result;
      console.log(this.employees);
    });
  }

  ngOnInit()
  {
    
    // this.employees=[
    //   {No:11,Name:"Priya",Address:"Chennai"},
    //   {No:12,Name:"Prachi",Address:"pune"},
    //   {No:13,Name:"ak",Address:"pune"},
    //   {No:14,Name:"rits",Address:"Chennai"}

    // ];
  }

  GoToRegister()
  {
    this.router.navigate(['register']);
  }

  delete(id:any)
  {
    
    this.service.delete(id).subscribe((response)=>{
      console.log(response);
      this.getData();
    });
  }
}
