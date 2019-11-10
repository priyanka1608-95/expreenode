import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit
 {

  emps;
  id;

  constructor(public routes:ActivatedRoute,
    public router:Router,public service:DataService) 
    {
      this.routes.paramMap.subscribe((params)=>{
         this.id =params.get("id");
      });

      this.service.getDataById(this.id).subscribe((result)=>{
          this.emps=result[0];
          console.log(this.emps);
      });


     }
     Update()
     {
       console.log("update ts file");
       console.log(this.emps.id);
       console.log(this.emps.name);
       console.log(this.emps.address);
       this.service.Update(this.emps).subscribe((response)=>{
        
       });
     }

  ngOnInit() {
  }

}
