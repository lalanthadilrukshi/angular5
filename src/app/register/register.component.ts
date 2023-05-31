import { Component,OnInit } from '@angular/core';
import {PersonService}  from '../services/person.service';
import {signUp} from '../data-type';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private person:PersonService){}
ngOnInit(): void {}
signUp(data:object):void{ /*type of data is object . return type is void*/ 
//signUp(data:signUp):void{ /*type of data is signUp . return type is void*/ 
console.warn(data)
this.person.userSignUp(data).subscribe((result)=>{

})
//this.person.userSignUp(data)  

}

}
