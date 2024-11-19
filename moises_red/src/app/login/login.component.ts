import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = ''; // Propiedad para el correo
  password: string = ''; // Propiedad para la contraseña

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Aquí puedes añadir lógica para autenticar al usuario
    if (this.email === 'admin@example.com' && this.password === '1234') {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
