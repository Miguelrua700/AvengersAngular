import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesListingComponent } from '../heroes-listing/heroes-listing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesListingComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'avengers.angular';
}
