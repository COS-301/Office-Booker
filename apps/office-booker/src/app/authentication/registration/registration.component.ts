import { Component } from '@angular/core';
import { Router } from '@angular/router';



import { IUser, CognitoService } from '../../cognito.service';

@Component({
  selector: 'office-booker-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {

  loading: boolean;
  isConfirm: boolean;
  user: IUser;

  constructor(private router: Router,
    private cognitoService: CognitoService) {
  this.loading = false;
  this.isConfirm = false;
  this.user = {} as IUser;
}

public signUp(): void {
  this.loading = true;
  
  this.cognitoService.signUp(this.user)

  .then(() => {
    alert("worked")
  this.loading = false;
  this.isConfirm = true;
  

  }).catch((e) => {
    alert(e)
  this.loading = false;
  });
}

public confirmSignUp(): void {
  alert("Entered confirmSignUp")
  this.loading = true;
  this.cognitoService.confirmSignUp(this.user)
  .then(() => {
  this.router.navigate(['/login']);
  }).catch((e) => {
    alert(e)
  this.loading = false;
  this.router.navigate(['/login'])
  });
}

}