import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LivroService } from '../../services/livro.service';
import { Livro } from '../../models/livro.model';
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-livro-form',
  standalone: true,
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css'],
  imports: [
    ReactiveFormsModule,
    ButtonDirective
  ]
})
export class LivrosComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  editando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private livroService: LivroService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      idlivro: [null],
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      editora: ['', Validators.required],
      anoPublicacao: [null, Validators.required]
    });
  }

  salvar(): void {
    if (this.form.valid) {
      const livro: Livro = this.form.value;

      if (this.editando && livro.idlivro) {
        this.livroService.atualizar(livro).subscribe(() => {
          this.form.reset();
          this.editando = false;
        });
      } else {
        this.livroService.cadastrar(livro).subscribe(() => {
          this.form.reset();
        });
      }
    }
  }

  carregarParaEdicao(livro: Livro): void {
    this.form.patchValue(livro);
    this.editando = true;
  }

  cancelar(): void {
    this.form.reset();
    this.editando = false;
  }
}
