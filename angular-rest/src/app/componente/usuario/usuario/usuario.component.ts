import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Observable<User[]>;
  nome: String;

  constructor(private usuarioService: UsuarioService) {

  }

  ngOnInit() {

    this.usuarioService.getUsuarioList().subscribe(data => {
      this.usuarios = data;
    });

  }

  deleteUsuario(id: Number) {
    this.usuarioService.deletarUsuario(id).subscribe(data => {
      console.log("Retorno metodo delete : " + data);
      this.usuarioService.getUsuarioList().subscribe(data => {
        this.usuarios = data;
      });
    })
  }

  consultarUsuario(){
    this.usuarioService.consultarUsuario(this.nome).subscribe(data => {
      this.usuarios = data;
    });
  }

}
