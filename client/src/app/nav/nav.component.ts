import { Component, OnInit } from '@angular/core';
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

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    this.accountService.login(this.model).subscribe(response =>{
      console.log(response);
    // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    // tslint:disable-next-line:semicolon
    })
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.accountService.logout();
  }

}
