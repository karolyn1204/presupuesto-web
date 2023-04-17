import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/views/home/home.component';
import { HeaderComponent } from './routes/components/header/header.component';
import { FormComponent } from './routes/components/form/form.component';
import { IncomeComponent } from './routes/components/income/income.component';
import { ExpensesComponent } from './routes/components/expenses/expenses.component';
import { FooterComponent } from './routes/components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './shared/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FormComponent,
    IncomeComponent,
    ExpensesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgxMaskPipe,
    NgxMaskDirective
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
