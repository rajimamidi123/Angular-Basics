import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RajiService {

  constructor() { }
getemployees(){
  return [
    {"id":1,"name":"raji","age":22},
    {"id":2,"name":"anu","age":22},
    {"id":3,"name":"shailu","age":22},
    {"id":4,"name":"navya","age":22}
]
}

}
