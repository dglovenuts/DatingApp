import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { error } from 'protractor';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  register() {
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    // tslint:disable-next-line:semicolon
    })
  }

  // tslint:disable-next-line:typedef
  cancel() {
    this.cancelRegister.emit(false);
  }

}
