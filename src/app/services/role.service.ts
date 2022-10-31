import {BehaviorSubject, ReplaySubject, scan} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class RoleService {
  // A stream that exposes all the roles a user has
  roles$ = new ReplaySubject<string[]>(1);

  // We leverage this roleUpdates$ to be able to update the roles
  // This is for demonstration purposes only
  roleUpdates$ = new BehaviorSubject(['user']);

  constructor() {
    this.roleUpdates$
      .pipe(
        scan((acc: any[], next: string[]) => next, [])
      )
      .subscribe(this.roles$);
  }

  update(roles: string[]) {
    this.roleUpdates$.next(roles);
  }
}
