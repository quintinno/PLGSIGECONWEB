import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoListarComponent } from './component/contato-listar/contato-listar.component';
import { ContatoCadastrarComponent } from './component/contato-cadastrar/contato-cadastrar.component';
import { FormsModule } from "@angular/forms";
import { ContatoAtualizarComponent } from './component/contato-atualizar/contato-atualizar.component';
import { ContatoDetalheComponent } from './component/contato-detalhe/contato-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoListarComponent,
    ContatoCadastrarComponent,
    ContatoAtualizarComponent,
    ContatoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
