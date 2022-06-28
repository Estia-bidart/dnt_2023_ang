import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../_services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private tokenService: TokenService
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    // // Récupération du token
    // let token = localStorage.getItem('token')
    // console.log(token)
    // console.log(!!token)

    // Test si token
    if(this.tokenService.isLogged()){
      return true
    }
    
    // SI pas de token go page login
    return this.router.navigate(['auth'])
  }
  
}
