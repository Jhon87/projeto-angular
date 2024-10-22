import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { AtualizarProdutoComponent } from './atualizar-produto/atualizar-produto.component';
import { RestritoComponent } from './restrito.component';
import { GuardGuard } from '../guard.guard';

const restritoRoutes: Routes = [
    { path: 'restrito', component: RestritoComponent, children:[
        {path: 'cadastro', component:CadastrarProdutoComponent, canActivate: [GuardGuard]},
        {path: 'lista', component: ListarProdutoComponent, canActivate: [GuardGuard]},
        {path: 'editar/:id', component: AtualizarProdutoComponent, canActivate: [GuardGuard]}
    ]},
   
    { path: '', redirectTo: '/restrito/listar-produto', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(restritoRoutes)],
    exports: [RouterModule]
})
export class RestritoRoutingModule { }