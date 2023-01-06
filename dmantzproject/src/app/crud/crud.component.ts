import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Crud } from '../crud';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
// students:any=[]

  public students:Crud[]=[];
  id:any;
  constructor(private http:CrudService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.get()
    this.id=this.route.snapshot.params['id'];

  }

  get(){
this.http.get().subscribe((data=>{
  this.students=data;
}))
  }
  updateStudents(id:number){
this.router.navigate(['/update',id])
  }
  deleteStudent(id:number){
this.http.deleteStudent(id).subscribe(results=>{
  console.log(results);
  this.get()
},message=>{
  alert("Do you want to delete it")
})
  }
  viewStudent(id:number){
 this.router.navigate(['/view',id])
  }
}
