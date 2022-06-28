import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface IToken{
  access_token: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    email: '',
    password: ''
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.http.post<IToken>('http://20.39.234.201:8080/auth/login', this.credentials).subscribe(
      data => {
        console.log(data.access_token)
        localStorage.setItem('token', data.access_token)
        this.router.navigate(['admin'])
      },
      err => console.log(err)
    )
  }

}
