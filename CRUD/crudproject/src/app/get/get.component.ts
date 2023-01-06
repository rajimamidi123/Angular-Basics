import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { IndiaService } from '../india.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  cityies:any=[]
  constructor(private indiaservice:IndiaService) { }

  ngOnInit(): void {
  }

  getAll(){
    this.indiaservice.getAll().subscribe((data)=>{
      this.cityies=data;

      console.log(data)
    })
  }
}
