import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectsDoneComponent } from './projects-done/projects-done.component';
import { FeatureProjectsComponent } from './feature-projects/feature-projects.component';
import { GallleryComponent } from './galllery/galllery.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ResumeComponent,
    AboutMeComponent,
    AboutPageComponent,
    ProjectsDoneComponent,
    FeatureProjectsComponent,
    GallleryComponent,
    ContactMeComponent,
    ProfileComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
