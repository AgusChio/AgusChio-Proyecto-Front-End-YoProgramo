import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      (data) => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['']);
        Swal.fire({
          icon: 'success',
          text: 'Inicio de sesión exitoso',
          timer: 1500
        }).then(() => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      },
      (err) => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        let message;
        if (err.status === 401) {
          message = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
        } else {
          message = 'No tienes autorización para acceder a esta página.';
        }
        Swal.fire({
          icon: 'error',
          text: message
        });
        console.log(this.errMsj);
      }
    );
  }

  onLogOut(): void {
    this.tokenService.logOut();
    this.isLogged = false;
    this.isLogginFail = false;
    this.tokenService.setToken('');
    this.tokenService.setUserName('');
    this.tokenService.setAuthorities([]);
    Swal.fire({
      icon: 'success',
      title: 'Sesión cerrada correctamente',
      timer: 1500
    }).then(() => {
      setTimeout(() => {
        location.reload();
      }, 100);
    });
  }

}