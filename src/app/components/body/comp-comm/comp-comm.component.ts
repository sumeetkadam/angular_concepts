import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeOfCommService } from 'src/app/services/type-of-comm.service';


@Component({
  selector: 'app-comp-comm',
  templateUrl: './comp-comm.component.html',
  styleUrls: ['./comp-comm.component.css']
})
export class CompCommComponent implements OnInit {
  data:any[]=[];
  // typeofcomm: TypeOfComm[] = [];
  constructor(private typeofcommservice: TypeOfCommService, activateRoute: ActivatedRoute) {}


  ngOnInit(): void {
   this.typeofcommservice.getData().subscribe(
    (data:any[])=>{
      this.data=data;
    });
  }
}
