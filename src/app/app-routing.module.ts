import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoAtualizarComponent } from './component/contato-atualizar/contato-atualizar.component';
import { ContatoCadastrarComponent } from './component/contato-cadastrar/contato-cadastrar.component';
import { ContatoDetalheComponent } from './component/contato-detalhe/contato-detalhe.component';
import { ContatoListarComponent } from './component/contato-listar/contato-listar.component';

const routes: Routes = [
  { path: "contato", component: ContatoListarComponent },
  { path: "cadastrar", component: ContatoCadastrarComponent },
  { path: "atualizar/:id", component: ContatoAtualizarComponent },
  { path: "detalhar/:id", component: ContatoDetalheComponent },
  { path: "", redirectTo: "contato", pathMatch: "full" } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
