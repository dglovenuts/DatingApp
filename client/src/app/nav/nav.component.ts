import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // tslint:disable-next-line:semicolon
  model: any = {}

  constructor(public accountService: AccountService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members');
    // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    // tslint:disable-next-line:semicolon
    })
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
