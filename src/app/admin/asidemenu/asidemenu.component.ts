import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asidemenu',
  templateUrl: './asidemenu.component.html',
  styleUrls: ['./asidemenu.component.css']
})
export class AsidemenuComponent implements OnInit {
  menus = [
    { name: 'Accueil', path: '/'},
    { name: 'Dashboard', path: 'dashboard'},
    { name: 'User', children: [
      { name: 'Liste', path: 'users'},
      { name: 'Ajouter', path: 'users/add'}
    ]},
    { name: 'Cocktail', children: [
      { name: 'Liste', path: 'cocktails'},
      { name: 'Ajouter', path: 'cocktails/add'}
    ]}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
