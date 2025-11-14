import { Routes } from '@angular/router';
import { HeroesListingComponent } from './Components/heroes-listing/heroes-listing.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';
import { NewHeroComponent } from './Components/new-hero/new-hero.component';

export const routes: Routes = [
    { path : 'heroes', component: HeroesListingComponent , children: [
        { path : 'hero/:alias' , component: HeroDetailComponent},
        { path: 'new' , component: NewHeroComponent }
    ]}
];
