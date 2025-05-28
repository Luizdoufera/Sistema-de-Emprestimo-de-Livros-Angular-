import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../services/livro.service';
import { Livro } from '../../model/livros';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-livros-lista',
  standalone: true,
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css'],
  imports: [
    TableModule
  ]
})
export class LivrosListaComponent implements OnInit {
  livros: Livro[] = [];

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.livroService.getTodos().subscribe((data) => {
      this.livros = data;
    });
  }
}
