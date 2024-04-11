import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilisateurService } from '../../services/utilisateur.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isAdmin: boolean = true;

  constructor(private userService: UtilisateurService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.userService.getUserByToken(token).subscribe({
        next: (user) => {
          this.isAdmin = user.role === 'manager';
        },
        error: (error) => {
          console.error('Error fetching user info:', error);
        },
      });
    }
  }
}
