import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContatoModel } from "../../model/contato-model";
import { ContatoService } from "../../service/contato.service";

@Component({
  selector: 'app-contato-listar',
  templateUrl: './contato-listar.component.html',
  styleUrls: ['./contato-listar.component.css']
})
export class ContatoListarComponent implements OnInit {

  contatoList: ContatoModel[];

  constructor( private contatoService: ContatoService, private router: Router ) { }

  ngOnInit(): void {
    this.recuperarContato();
  }

  recuperarContato() {
    this.contatoService.recuperarContato().subscribe( response => {
      this.contatoList = response;
    });
  }

  atualizarContato(id: number) {
    this.router.navigate(["atualizar", id]);
  }

  removerContato(id: number) {
    this.contatoService.removerContato(id).subscribe( response => {
      console.log(response);
      this.recuperarContato();
    }, error => console.log(error));
  }

  detalharContato(id: number) {
    this.router.navigate(["detalhar", id]);
  }

}
