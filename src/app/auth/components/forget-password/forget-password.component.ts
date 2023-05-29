import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent {
  email = '';
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private _router: Router
  ) {}
  onSubmit() {
    this.authService.forgotPassword(this.email).subscribe({
      next: (res: any) => {
        console.log(res);
        this._router.navigateByUrl('/auth/resetpassword');
      },
      error: (err: any) => {
        console.log(err);
      },
    });

    // let timerInterval: number;
    // Swal.fire({
    //   title: 'Auto close alert!',
    //   html: 'I will close in <b></b> milliseconds.',
    //   timer: 2000,
    //   timerProgressBar: true,
    //   didOpen: () => {
    //     Swal.showLoading();
    //     const container = Swal.getHtmlContainer();
    //     if (container !== null) {
    //       const b = container.querySelector('b');
    //       timerInterval = setInterval(() => {
    //         b.textContent = Swal.getTimerLeft();
    //       }, 100) as unknown as number;
    //     }
    //   },
    //   willClose: () => {
    //     clearInterval(timerInterval);
    //   },
    // }).then((result) => {
    //   /* Read more about handling dismissals below */
    //   if (result.dismiss === Swal.DismissReason.timer) {
    //     console.log('I was closed by the timer');
    //   }
    // });
  }
}
