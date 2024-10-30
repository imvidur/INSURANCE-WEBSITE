import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from "./hero/hero.component";
import { FeaturesComponent } from "./features/features.component";
import { ServicesComponent } from "./services/services.component";
import { CallToActionComponent } from "./call-to-action/call-to-action.component";
import { BlogNewsComponent } from "./blog-news/blog-news.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, FeaturesComponent, ServicesComponent, CallToActionComponent, BlogNewsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'insurance-website';
}