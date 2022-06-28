import { Component, OnInit } from '@angular/core';
import { ICocktail } from 'src/app/_interfaces/cocktail';
import { CocktailService } from 'src/app/_services/cocktail.service';

@Component({
  selector: 'app-c-index',
  templateUrl: './c-index.component.html',
  styleUrls: ['./c-index.component.css']
})
export class CIndexComponent implements OnInit {

  cocktailList: ICocktail[] = []

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktailService.getAllCocktails().subscribe(
      response => {
        this.cocktailList = response.data
      },
      err => console.log(err)
    )
  }

  delete(id: number | undefined): void{
    this.cocktailService.deleteCocktail(id).subscribe(
      () => {
        this.cocktailList = this.cocktailList.filter(c => c.id !== id)
      },
      err => console.log(err)
    )
  }

}
