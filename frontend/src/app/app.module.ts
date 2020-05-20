import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './main/components/nav-bar/nav-bar.component';
import { SideBarComponent } from './main/components/side-bar/side-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginModule, LoginRoutingModule } from './login';
import { HomeModule, HomeRoutingModule } from './home';
import { UsuarioModule, UsuarioRoutingModule } from './usuario';
import { VeiculoModule, VeiculoRoutingModule } from './veiculo';
import { CommonLocalModule } from './common';
import { DataTablesModule } from 'angular-datatables';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    LoadingBarHttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true
    }),
    LoginModule,
    LoginRoutingModule,
    HomeModule, 
    HomeRoutingModule,
    UsuarioModule,
    UsuarioRoutingModule,
    VeiculoModule,
    VeiculoRoutingModule,
    CommonLocalModule,
    DataTablesModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
