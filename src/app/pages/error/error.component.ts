import {Component, OnInit} from '@angular/core';
import {RoleService} from "../../services/role.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private roleService: RoleService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addAdmin() {
    this.roleService.update(["user", "admin"])
    this.router.navigate(["/"])
  }
}
