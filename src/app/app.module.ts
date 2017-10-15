import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

// Utils
import { httpFactory, HttpProvider } from '@utils/interceptor-http-service';
import { AuthGuard } from '@utils/auth-guard';

// Services

// Components
import { AppComponent } from '@components/app.component';
import { MainComponent } from '@components/main/main.component';
import { NotFoundComponent } from '@components/not-found/not-found.component';


const appRoutes: Routes = [
  { path: '', component: MainComponent },
  // To activate Guard { path: 'path', component: MainComponent canActivate: [AuthGuard] },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    HttpModule,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: Http, // Http Interceptop for JWT
      useFactory: httpFactory, deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
