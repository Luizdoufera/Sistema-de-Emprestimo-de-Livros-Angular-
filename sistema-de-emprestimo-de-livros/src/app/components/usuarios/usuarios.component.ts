import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../model/usuarios';
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  imports: [
    ReactiveFormsModule,
    ButtonDirective
  ]
})
export class UsuariosComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  editando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      nome: ['', Validators.required],
      matricula: ['', Validators.required],
      curso: ['', Validators.required]
    });
  }

  salvar(): void {
    if (this.form.valid) {
      const usuario: Usuario = this.form.value;

      if (this.editando && usuario.id) {
        this.usuarioService.atualizar(usuario).subscribe(() => {
          this.form.reset();
          this.editando = false;
        });
      } else {
        this.usuarioService.cadastrar(usuario).subscribe(() => {
          this.form.reset();
        });
      }
    }
  }

  carregarParaEdicao(usuario: Usuario): void {
    this.form.patchValue(usuario);
    this.editando = true;
  }

  cancelar(): void {
    this.form.reset();
    this.editando = false;
  }
}
