import { Component, EventEmitter, Input, OnInit ,Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
// @Input() public fromparent:any
@Output() customeve= new EventEmitter()
  constructor() { }
  message="passed to parent component"
  ngOnInit(): void {
   this.passToParent();
  }
  passToParent(){
    this.customeve.emit(this.message)
  }
  updateMessage(e:any){
    this.message=e.target.value
  }

}
