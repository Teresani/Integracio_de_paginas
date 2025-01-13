import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component'; 

export const routes: Routes = [
    {path: '', component: HeaderComponent},
    {path: 'home', component: HomeComponent},
    {path: 'footer', component: FooterComponent}
];
