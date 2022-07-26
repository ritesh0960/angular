import { Component, OnInit } from '@angular/core';
import { Idept } from '../idept';
import { DeptService } from '../dept.service';
import { ActivatedRoute } from '@angular/router'; //it is a class to fetch the data from the url which will be generated when we click on details link then id will be passed to the route
@Component({
  selector: 'app-find-dept',
  templateUrl: './find-dept.component.html',
  styleUrls: ['./find-dept.component.css']
})
export class FindDeptComponent implements OnInit {

  deptdata:Idept={id:0,name:'',location:''};
  id:number=0;
  //injecting the dept service and activatedroute
  constructor(private deptservice:DeptService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    const tid=this.activatedroute.snapshot.paramMap.get('id');
    //this above method will give the id from the url
    this.id=Number(tid);
    this.deptservice.getDept(this.id).subscribe((data:Idept)=>{
      this.deptdata=data
    })
  }

}
