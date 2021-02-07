import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContatoModel } from 'src/app/model/contato-model';
import { ContatoService } from 'src/app/service/contato.service';

@Component({
  selector: 'app-contato-cadastrar',
  templateUrl: './contato-cadastrar.component.html',
  styleUrls: ['./contato-cadastrar.component.css']
})
export class ContatoCadastrarComponent implements OnInit {

  contato: ContatoModel = new ContatoModel();

  constructor( private contatoService: ContatoService, private router: Router ) { }

  ngOnInit(): void { }

  cadastrarContato() {
    this.contatoService.cadastrarContato(this.contato).subscribe( response => {
      console.log(response);
      this.redirecionarPaginaLitarContato();
    }, error => console.log(error));
  }

  redirecionarPaginaLitarContato() {
    this.router.navigate(["/contato"]);
  }

}
