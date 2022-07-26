import { Component, OnInit } from '@angular/core';
import { DeptService } from '../dept.service';

@Component({
  selector: 'app-listdept',
  templateUrl: './listdept.component.html',
  styleUrls: ['./listdept.component.css']
})
export class ListdeptComponent implements OnInit {

  //declaring a collection of deptlist of datatype any
  deptlist:any[]=[]
  //injecting the service into the constructor and then calling getdeptlist from deptservice and getting the data from it and storing it into deptlist(here subscribe is getting/fetching the data)
  constructor( private deptservice:DeptService) {
    this.deptservice.getDeptList().subscribe(data=>{this.deptlist=data})
  }

  ngOnInit(): void {
  }

}
