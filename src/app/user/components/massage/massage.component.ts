import { Component, OnInit } from '@angular/core';
import { MassggesService } from '../../service/massgges.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.css'],
})
export class MassageComponent implements OnInit {
  massages: any;
  user: any;
  constructor(private messagge: MassggesService, private _router: Router) {}

  ngOnInit() {
    this.getMassages();
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user')!);
      console.log(this.user);
    }
  }

  getMassages() {
    const givenDate = new Date('2023-04-05T00:00:00');
    this.messagge.showMassages().subscribe({
      next: (data) => {
        this.massages = data;
        this.massages.sort((a:any, b:any) => {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          const diffA = Math.abs(dateA.getTime() - givenDate.getTime());
          const diffB = Math.abs(dateB.getTime() - givenDate.getTime());
          return diffB - diffA;
        });
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
}
