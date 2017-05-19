import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routes} from '../app/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {DataTableModule} from "angular2-datatable";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes,
    DataTableModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
