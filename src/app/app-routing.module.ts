import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { CvComponent } from './cv/cv.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
// {path:'', component:HomeComponent},
{path:'',component:FormComponent},

{path:'header', component:HeaderComponent},
{path:'footer', component:FooterComponent},
{path:'about', component:AboutComponent},
{path:'login', component:LoginComponent},
{path:'portfolio', component:HomeComponent},
{path:'cv',component:PortfolioComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
