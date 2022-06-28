import { Component, OnInit } from '@angular/core';
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

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.cocktailService.addCocktail(this.cocktail).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }

}
