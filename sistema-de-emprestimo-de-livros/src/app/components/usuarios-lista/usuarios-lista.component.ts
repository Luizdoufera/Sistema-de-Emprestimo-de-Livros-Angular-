import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../model/usuarios';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-usuarios-lista',
  standalone: true,
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css'],
  imports: [
    TableModule
  ]
})
export class UsuariosListaComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getTodos().subscribe((data) => {
      this.usuarios = data;
    });
  }
}
