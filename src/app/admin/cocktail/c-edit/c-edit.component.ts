import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICocktail } from 'src/app/_interfaces/cocktail';
import { CocktailService } from 'src/app/_services/cocktail.service';

@Component({
  selector: 'app-c-edit',
  templateUrl: './c-edit.component.html',
  styleUrls: ['./c-edit.component.css']
})
export class CEditComponent implements OnInit {

  cocktail: ICocktail = {
    id: 0,
    user_id: 0,
    nom: '',
    description: '',
    recette: '',
    updatedAt: '',
    createdAt: '',
    deletedAt: null 
  }

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private cocktailService: CocktailService
  ) { }

  ngOnInit(): void {
    // Récupération du param url
    let cid = this.activated.snapshot.paramMap.get('cid')

    // Récupérer les donnée venant de l'API
    this.cocktailService.getCocktail(cid).subscribe(
      data => this.cocktail = data.data,
      err => console.log(err)
    )
  }

  onSubmit(){
    this.cocktailService.updateCocktail(this.cocktail).subscribe(
      () => this.router.navigate(['/admin/cocktails']),
      err => console.log(err)
    )
  }

}
