import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formSubmitted: boolean = false;

  registerForm: FormGroup = this.formBuilder.group({
    nombre: ['Angel Josue', [Validators.required, Validators.minLength(2)]],
    email: ['asevilla@caracolknits.com', [Validators.required, Validators.email]],
    password: ['12345678', Validators.required],
    password2: ['12345678', Validators.required],
    terminos: [false, Validators.required]
  }, {
    validators: this.samePasswords('password', 'password2')
  });

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuarioService
  ) { }

  crearUsuario() {
    this.formSubmitted = true;
    console.log(this.registerForm.value);

    if(this.registerForm.invalid){
      return;
    }

    this.usuariosService.crearUsuario(this.registerForm.value);
  }

  campoNoValido(campo: string): boolean{
    if(this.registerForm.get(campo)?.invalid && this.formSubmitted){
      return true;
    }
    return false;
  }

  aceptaTerminos(){
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

  validPasswords(){
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    return (pass1 !== pass2) && this.formSubmitted;
  }

  samePasswords(pass1: string, pass2: string){
    return (formGroup: FormGroup) => {
      const pass1Name = formGroup.get(pass1);
      const pass2Name = formGroup.get(pass2);

      pass2Name?.setErrors(pass1Name?.value === pass2Name.value ? null : {noEsIgual: true})
    }
  }

}
