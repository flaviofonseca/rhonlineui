import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPaginatorIntlBr } from './core/config/mat-paginator-int-blr';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorIntlBr
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
