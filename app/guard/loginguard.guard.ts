import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  role:any;
  router: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.role=localStorage.getItem('user')
      if(this.role=='')
      {
        return false;
      }
      else{
      if(this.role=='admin')
    return true;
    else
    {
      alert("You are not authorized to visit page");
      this.router.navigate(['login'])
      return false;
    }
  }
}
}
