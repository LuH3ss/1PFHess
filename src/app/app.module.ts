import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeLoginComponent } from './home-login/home-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MainStudentComponent } from './main-student/main-student.component';
import { AdminComponent } from './admin/admin.component';
import { TablaComponent } from './tabla/tabla.component';
import { BotoneraComponent } from './botonera/botonera.component'; 



@NgModule({
  declarations: [
    AppComponent,
    HomeLoginComponent,
    SidemenuComponent,
    MainStudentComponent,
    AdminComponent,
    TablaComponent,
    BotoneraComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
