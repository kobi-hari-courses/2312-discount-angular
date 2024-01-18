import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { firstValueFrom, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export default class AccountComponent {
  authService = inject(AuthService);  

  status$ = this.authService.getStatus();

  actionLabel$ = this.status$.pipe(
    map(status => status ? 'Logout' : 'Login')
  );

  async changeStatus() {
    const status = await firstValueFrom(this.status$);
    if (status) {
      this.authService.logout();
    } else {
      this.authService.login();
    }
  }




}
