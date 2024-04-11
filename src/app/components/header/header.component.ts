import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { LogoutService } from '../../services/logout.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() text: string = '';

  constructor(
    private router: Router,
    private location: Location,
    private logoutService: LogoutService
  ) {}

  logout(): void {
    this.logoutService.logout().subscribe({
      next: () => {
        localStorage.removeItem('token');
        this.router.navigate(['/connexion']);
      },
      error: (error) => {
        console.error('Logout error:', error);
      },
    });
  }

  isConnexionPage(): boolean {
    return this.location.path() === '/connexion';
  }
}
