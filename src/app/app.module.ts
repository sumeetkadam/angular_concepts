import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { CompCommComponent } from './components/body/comp-comm/comp-comm.component';
import { RoutingComponent } from './components/body/routing/routing.component';
import { ReactiveFormsComponent } from './components/body/reactive-forms/reactive-forms.component';
import { RxjsComponent } from './components/body/rxjs/rxjs.component';
import { HomeComponent } from './components/body/home/home.component';
import { ServicesComponent } from './components/body/comp-comm/services/services.component';
import { NgrxComponent } from './components/body/comp-comm/ngrx/ngrx.component';
import { InputOutputComponent } from './components/body/comp-comm/input-output/input-output.component';
import { TypeOfCommService } from './services/type-of-comm.service';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './components/body/comp-comm/input-output/parent/parent.component';
import { CounterButtonsComponent } from './components/body/comp-comm/input-output/parent/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './components/body/comp-comm/input-output/parent/counter-output/counter-output.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CompCommComponent,
    RoutingComponent,
    ReactiveFormsComponent,
    RxjsComponent,
    HomeComponent,
    ServicesComponent,
    NgrxComponent,
    InputOutputComponent,
    ParentComponent,
    CounterButtonsComponent,
    CounterOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TypeOfCommService],
  bootstrap: [AppComponent]
})
export class AppModule { }
