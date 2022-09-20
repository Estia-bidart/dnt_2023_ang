import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailService } from 'src/app/_services/cocktail.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-c-add',
  templateUrl: './c-add.component.html',
  styleUrls: ['./c-add.component.css']
})
export class CAddComponent implements OnInit {

  cocktail={
    user_id:0,
    nom: '',
    description: '',
    recette: ''
  }

  constructor(
    private tokenService: TokenService,
    private cocktailService: CocktailService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let user = this.tokenService.getPayload()
    this.cocktail.user_id = user.id
    
    this.cocktailService.addCocktail(this.cocktail).subscribe(
      () => this.router.navigate(['/admin/cocktails']),
      err => console.log(err)
    )
  }

}
