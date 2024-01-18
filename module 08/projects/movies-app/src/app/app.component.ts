import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userLabel$ = inject(AuthService)
                  .getStatus()
                  .pipe(map(status => status ? 'Admin' : 'Guest'))
}
