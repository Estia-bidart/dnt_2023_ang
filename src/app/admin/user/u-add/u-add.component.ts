import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-u-add',
  templateUrl: './u-add.component.html',
  styleUrls: ['./u-add.component.css']
})
export class UAddComponent implements OnInit {

  user = {
    nom: '',
    prenom: '',
    pseudo: '',
    email: '',  
    password: ''
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.addUser(this.user).subscribe(
      () => this.router.navigate(['/admin/users']),
      err => console.log(err)
    )
  }
}
