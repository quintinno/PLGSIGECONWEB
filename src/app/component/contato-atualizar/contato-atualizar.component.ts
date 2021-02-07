import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoModel } from 'src/app/model/contato-model';
import { ContatoService } from 'src/app/service/contato.service';

@Component({
  selector: 'app-contato-atualizar',
  templateUrl: './contato-atualizar.component.html',
  styleUrls: ['./contato-atualizar.component.css']
})
export class ContatoAtualizarComponent implements OnInit {

  contato: ContatoModel = new ContatoModel();

  constructor( private contatoService: ContatoService, private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.recuperarContatoPorId();
  }

  recuperarContatoPorId() {
    let id = this.recuperarId();
    this.contatoService.recuperarContatoPorId(id).subscribe( response => {
      this.contato = response;
      console.log(this.contato);
    }, error => console.error(error));
  }

  private recuperarId() {
    return this.activatedRoute.snapshot.params["id"];
  }

  atualizarContato() {
    this.contatoService.atualizarContato(this.recuperarId(), this.contato).subscribe( response => {
      console.log(response);
      this.redirecionarPaginaLitarContato();
    }, error => console.error(error));
  }

  redirecionarPaginaLitarContato() {
    this.router.navigate(["/contato"]);
  }

}
