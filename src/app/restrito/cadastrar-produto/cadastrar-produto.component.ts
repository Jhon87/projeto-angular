import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.models';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent {

  public produto: Produto = new Produto(0,"","","",0);

  constructor(private _produtoService: ProdutoService, private _router: Router){}

  cadastrar():void{
    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto => {
        this.produto = new Produto(0,"","","",0);
        alert("Cadastro efetuado com sucesso!");
      },
      err => {
        alert("Erro ao cadastrar");
      }
    );

    this._router.navigate(["restrito/lista"]);
  }

}
