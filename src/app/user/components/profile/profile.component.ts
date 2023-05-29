import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MassggesService } from '../../service/massgges.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  editing = false;
  user: any;
  massages: any[]=[];
  enableEdit() {
    this.editing = !this.editing;
  }
  constructor(private _router: Router, private messagge: MassggesService) {}
  // showPassword() {
  //   const passwordInput = document.getElementById('password') as HTMLInputElement;
  //   if (passwordInput.type === 'password') {
  //     passwordInput.type = 'text';
  //   } else {
  //     passwordInput.type = 'password';
  //   }
  // }
  ngOnInit(): void {
    this. getMassages()
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user')!);
      console.log(this.user);
    }
  }

  getMassages() {
    this.messagge.showMassages().subscribe({
      next: (data) => {
        if (data){
          this.massages = data.filter((massage:any) => massage.status==0)
          localStorage.setItem('massagesNum',String(this.massages.length))
        }
        console.log(data);
      },
    });
  } 


  logout() {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this._router.navigateByUrl('auth/login');
    }
  }

  seenFunction() {
    this.messagge.markAllSeenMessages().subscribe({
      next: (res) => {
        console.log(res, 'all change');
        localStorage.removeItem('massagesNum')
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
