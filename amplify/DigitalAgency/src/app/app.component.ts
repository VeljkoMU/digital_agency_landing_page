import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { HeroComponent } from './component/hero/hero.component';
import { GetInTouchMarqeeComponent } from './component/get-in-touch-marqee/get-in-touch-marqee.component';
import { ServicesComponent } from './component/services/services.component';
import { CapabilitiesComponent } from './component/capabilities/capabilities.component';
import { CallToActionComponent } from './component/call-to-action/call-to-action.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, GetInTouchMarqeeComponent, ServicesComponent, CapabilitiesComponent, CallToActionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DigitalAgency';
}
