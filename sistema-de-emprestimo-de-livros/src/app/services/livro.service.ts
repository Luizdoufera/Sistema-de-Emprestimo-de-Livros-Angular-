import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../model/livros';

@Injectable({ providedIn: 'root' })
export class LivroService {
  private apiUrl = 'http://localhost:8080/livros';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiUrl);
  }

  salvar(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.apiUrl, livro);
  }

  atualizar(livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.apiUrl}/${livro.idlivro}`, livro);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

