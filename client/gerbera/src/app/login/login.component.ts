import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  loginSuccess:any = false;
  buttonValidate:any = true;
  trueMessageVisible:any = 'invisible'
  falseMessageVisible:any = 'invisible'

  constructor(private http:HttpClient){}

  login(){
    console.log(this.email, this.password)
    this.http.post('http://localhost:8600/validateuser', {email: this.email, password: this.password}).subscribe(res => {
      console.log(res)
      this.loginSuccess = res
    })
    if (this.loginSuccess != true) {
      this.falseMessageVisible = 'visible'
    } else {
      this.trueMessageVisible = 'visible'
    }
  }

  ngOnInit(): void {

  }
}



