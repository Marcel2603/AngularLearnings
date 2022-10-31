import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from "@angular/core";
import {of, Subject, takeUntil} from "rxjs";
import {RoleService} from "../services/role.service";

@Directive({
  selector: '[hasRole]'
})
export class HasRoleDirective implements OnInit, OnDestroy {
  @Input() hasRole: string | undefined


  stop$ = new Subject();

  isVisible = false;

  /**
   *
   * @param viewContainerRef -- the location where we need to render the templateRef
   * @param templateRef -- the templateRef to be potentially rendered
   * @param roleService
   */
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private roleService: RoleService
  ) {
  }

  ngOnInit(): void {
    this.roleService.roles$.pipe(
      takeUntil(this.stop$)
    ).subscribe(roles => {
      // If he doesn't have any roles, we clear the viewContainerRef
      if (!roles) {
        this.viewContainerRef.clear()
      }
      if (roles.includes(<string>this.hasRole)) {
        // If it is already visible (which can happen if
        // his roles changed) we do not need to add it a second time
        if (!this.isVisible) {
          // We update the `isVisible` property and add the
          // templateRef to the view using the
          // 'createEmbeddedView' method of the viewContainerRef
          this.isVisible = true;
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
          // If the user does not have the role,
          // we update the `isVisible` property and clear
          // the contents of the viewContainerRef
          this.isVisible = false;
          this.viewContainerRef.clear();
        }
      }


    })
  }

  ngOnDestroy(): void {
    this.stop$.next("some");
  }

}
