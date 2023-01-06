import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crud } from '../crud';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
//  students:Crud;
 students:Crud=new Crud();

  constructor(private crud:CrudService,private router:Router) { }

  ngOnInit(): void {

  }
  saveStudent(){
    this.crud.post(this.students).subscribe((data)=>{
      console.log(data);
      this.goTocurd();
    },error=>{
      console.log(error)
    })
  }
  goTocurd(){
this.router.navigate(['/crud'])
  }
  onSubmit(){
    console.log(this.students)
    this.saveStudent();
    this.goTocurd();
    
  }

}
