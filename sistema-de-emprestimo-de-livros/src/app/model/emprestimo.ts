import { Livro } from './livros';
import { Usuario } from './usuarios';

export type StatusEmprestimo = 'EMPRESTADO' | 'DEVOLVIDO';

export interface Emprestimo {
  id?: number;
  livro: Livro;
  usuario: Usuario;
  dataEmprestimo: string;
  dataDevolucaoPrevista: string;
  status: StatusEmprestimo;
}
