import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { environment } from './environments/environment';
import { RouterModule } from '@angular/router';
import { routes } from './app/app-routes';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app/app-routing.module';

if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
});

