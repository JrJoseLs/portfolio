import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './ui/nav-bar/nav-bar.component';
import { BannerComponent } from './ui/banner/banner.component';
import { HeaderComponent } from './ui/header/header.component';
import { AboutComponent } from './ui/about/about.component';
import { SkillsComponent } from './ui/skills/skills.component';
import { ProjectsComponent } from './ui/projects/projects.component';
import { ContactComponent } from './ui/contact/contact.component';
import { FooterComponent } from './ui/footer/footer.component';
import { CurriculumComponent } from './ui/curriculum/curriculum.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
