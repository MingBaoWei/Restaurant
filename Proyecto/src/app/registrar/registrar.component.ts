import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  
  userData: any = {};

  constructor(private authService: AuthService) {}

  registrarUsuario() {
    this.authService.register(this.userData).subscribe(
      () => {
        console.log('Usuario registrado correctamente');
        // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    );
  }

  showLoginForm: boolean = false;
  showRegisterForm: boolean = false;

  showLogin() {
    this.showLoginForm = true;
    this.showRegisterForm = false;
  }

  showRegister() {
    this.showLoginForm = false;
    this.showRegisterForm = true;
  }
}
