import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crud } from '../crud';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
id:number
students:Crud
  constructor(private route:ActivatedRoute, private http:CrudService ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    // this.students=new Crud();
   this.http.getStudentsByid(this.id).subscribe(data=>{
    this.students=data;
   })
  }

}
