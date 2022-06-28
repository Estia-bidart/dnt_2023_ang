import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailService } from 'src/app/_services/cocktail.service';

@Component({
  selector: 'app-c-add',
  templateUrl: './c-add.component.html',
  styleUrls: ['./c-add.component.css']
})
export class CAddComponent implements OnInit {

  cocktail={
    user_id:1,
    nom: '',
    description: '',
    recette: ''
  }

  constructor(
    private cocktailService: CocktailService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.cocktailService.addCocktail(this.cocktail).subscribe(
      () => this.router.navigate(['/admin/cocktails']),
      err => console.log(err)
    )
  }

}
