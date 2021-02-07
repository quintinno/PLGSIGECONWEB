import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoModel } from 'src/app/model/contato-model';
import { ContatoService } from 'src/app/service/contato.service';

@Component({
  selector: 'app-contato-detalhe',
  templateUrl: './contato-detalhe.component.html',
  styleUrls: ['./contato-detalhe.component.css']
})
export class ContatoDetalheComponent implements OnInit {

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

  detalharContato() {
    this.contatoService.atualizarContato(this.recuperarId(), this.contato).subscribe( response => {
      console.log(response);
    }, error => console.error(error));
  }

  removerContato(id: number) {
    this.contatoService.removerContato(id).subscribe( response => {
      console.log(response);
      this.redirecionarPaginaLitarContato();
    }, error => console.log(error));
  }

  redirecionarPaginaLitarContato() {
    this.router.navigate(["/contato"]);
  }

}
