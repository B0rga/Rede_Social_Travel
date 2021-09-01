import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'confirmar-email',
    loadChildren: () => import('./confirmar-email/confirmar-email.module').then( m => m.ConfirmarEmailPageModule)
  },
  {
    path: 'ultimo-passo',
    loadChildren: () => import('./ultimo-passo/ultimo-passo.module').then( m => m.UltimoPassoPageModule)
  },
  {
    path: 'esqueceu-senha',
    loadChildren: () => import('./esqueceu-senha/esqueceu-senha.module').then( m => m.EsqueceuSenhaPageModule)
  },
  {
    path: 'codigo-recuperar',
    loadChildren: () => import('./codigo-recuperar/codigo-recuperar.module').then( m => m.CodigoRecuperarPageModule)
  },
  {
    path: 'redefinir-senha',
    loadChildren: () => import('./redefinir-senha/redefinir-senha.module').then( m => m.RedefinirSenhaPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./menu-items/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'viagens',
    loadChildren: () => import('./menu-items/viagens/viagens.module').then( m => m.ViagensPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./menu-items/configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'post-completo',
    loadChildren: () => import('./post-completo/post-completo.module').then( m => m.PostCompletoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
