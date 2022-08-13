import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel = new User()

  constructor() { }

  ngOnInit(): void {
  }

  capturarDados(){
    console.log(this.userModel);

    console.log(this.userModel.nome);
    console.log(this.userModel.email);
    console.log(this.userModel.senha);
    
  }

}
