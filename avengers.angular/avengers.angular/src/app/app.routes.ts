// Conteúdo atualizado para src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HeroesListingComponent } from './Components/heroes-listing/heroes-listing.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';
import { NewHeroComponent } from './Components/new-hero/new-hero.component';
// 1. Importar o componente de Issues
import { IssuesListingComponent } from './Components/issues-listing/issues-listing.component';

export const routes: Routes = [
    { path : 'heroes', component: HeroesListingComponent , children: [
        { path : 'hero/:alias' , component: HeroDetailComponent},
        { path: 'new' , component: NewHeroComponent }
    ]},
    // 2. Adicionar a rota para 'issues'
    { path : 'issues', component: IssuesListingComponent }
];
