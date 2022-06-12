import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserInterface } from 'src/app/models/formulario.models';
import { comparePassword } from './validacion/validacion.model';

@Component({
  selector: 'app-suscribir',
  templateUrl: './suscribir.component.html',
  styleUrls: ['./suscribir.component.scss'],
})
export class SuscribirComponent implements OnInit {
  // public subcripcionUsuario: FormGroup;
  // public resgistrado: boolean = false;

  // constructor(private formBuilder: FormBuilder) {
  //   this.subcripcionUsuario = this.formBuilder.group(
  //     {
  //       nombre: [
  //         '',
  //         [
  //           Validators.required,
  //           Validators.maxLength(20),
  //           Validators.pattern('[a-zA-Z0-9 ]*'),
  //         ],
  //       ],
  //       apellido: [
  //         '',
  //         [
  //           Validators.required,
  //           Validators.maxLength(50),
  //           Validators.pattern('[a-zA-Z0-9 ]*'),
  //         ],
  //       ],
  //       email: ['', [Validators.required, Validators.email]],
  //       password: ['', [Validators.required, Validators.maxLength(10)]],
  //       passwordRepeat: ['', [Validators.required, Validators.maxLength(10)]],
  //     },
  //     {
  //       validator: comparePassword('password', 'passwordRepeat'),
  //     }
  //   );
  // }

  ngOnInit(): void {}

  // public registrarse(): void {

  //   this.resgistrado = true

  //   if (this.subcripcionUsuario.valid) {

  //     const user: UserInterface = {

  //       nombre: this.subcripcionUsuario.get("nombre")?.value,
  //       apellido: this.subcripcionUsuario.get("apellido")?.value,
  //       email: this.subcripcionUsuario.get("email")?.value,
  //       password: this.subcripcionUsuario.get("password")?.value,
  //       passwordRepeat: this.subcripcionUsuario.get("passwordRepeat")?.value,


  //     };

  //     this.subcripcionUsuario.reset();

  //     this.resgistrado = false

  //   }



  // }
}
