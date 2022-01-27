import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CoursesDetailsComponent } from './pages/courses-details/courses-details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InstructorsComponent } from './pages/instructors/instructors.component';

// Services
import { HttpService } from './services/http.service';
import { FunctionsService } from './services/functions.service';

const appRoutes: Routes = [
  { path: 'instructors', component: InstructorsComponent },
  { path: 'courses-details/:code', component: CoursesDetailsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '', component: HomeComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    CoursesDetailsComponent,
    ContactUsComponent,
    NotFoundComponent,
    InstructorsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HttpService,
    FunctionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
