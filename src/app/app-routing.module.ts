import { Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import {AppComponent} from './app.component';
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

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'about-me',component: AboutMeComponent},
  { path: 'about-page',component: AboutPageComponent},
  { path: 'projects-done',component: ProjectsDoneComponent},
  { path: 'feature-projects',component: FeatureProjectsComponent},
  { path: 'galllery',component: GallleryComponent},
  { path: 'contact-me',component: ContactMeComponent},
  { path: 'profile',component: ProfileComponent},
  { path: 'skills',component: SkillsComponent},
  { path: 'experience',component: ExperienceComponent},
  { path: 'contact-details',component: ContactDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}