import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crud } from '../crud';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
students:Crud=new Crud();
id:number
  constructor(private crud:CrudService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
this.crud.getStudentsByid(this.id).subscribe((data)=>{
  this.students=data;
})
}


goTocurd(){
  this.router.navigate(['/crud'])
  }
  saveUpdateStudent(){
    this.crud.updateStudent(this.id,this.students).subscribe(data=>{
      console.log(data)
    })
  }
onSubmit(){
  
  
this.saveUpdateStudent();
this.goTocurd();
// this.crud.updateStudent(this.id,this.students).subscribe(data=>{
//   })

}
 
// update(){
//   this.router.navigate(['/crud'])
// }
}
