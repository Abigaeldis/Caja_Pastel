import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.scss',
})
export class GestionComponent {}
