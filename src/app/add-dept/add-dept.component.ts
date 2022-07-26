import { Component, OnInit } from '@angular/core';
import { Idept } from '../idept';
import { DeptService } from '../dept.service';
import { Router } from '@angular/router';

//once the data is saved it should automatically move to list component so import of router component is required 
@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.css']
})
export class AddDeptComponent implements OnInit {

  deptdata:Idept={id:0,name:'',location:''}
  constructor(private deptservice:DeptService,private router:Router) { }
  saveDept(dept:Idept){
    this.deptdata=dept;
    this.deptservice.addDept(this.deptdata).subscribe(()=>{
      alert("Record added successfully")
      this.router.navigate(['/list'])
    })
  }
  ngOnInit(): void {
  }

}
