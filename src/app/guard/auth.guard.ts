import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {RoleService} from "../services/role.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private roleService: RoleService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const path = route.url[0]
    const neededRole = this.getRoleForPath(path)
    return this.roleService.roles$.pipe(map(roles => {

      if (!roles.includes(neededRole)) {
        this.router.navigate(["/error"])
        return false
      }
      return true
    }))
  }

  private getRoleForPath(urlSegment: UrlSegment) {
    switch (urlSegment.path) {
      case "home": {
        return 'user'
      }
      case "second": {
        return "admin"
      }
      default:
        return ""
    }

  }
}
