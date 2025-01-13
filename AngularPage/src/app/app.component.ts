import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { AppComponent } from "./pages/app/app.component";

@Component({
  selector: 'app-root',
  imports: [AppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularPage';
}
