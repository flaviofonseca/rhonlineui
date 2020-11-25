import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { NgxMaskModule } from 'ngx-mask';
import { ConfirmDialogComponent } from './componentes/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from './componentes/confirm-dialog/confirm-dialog.service';
import { CustomInputDateComponent } from './componentes/custom-input-date/custom-input-date.component';
import { AlertService } from './service/alert.service';
import { BreadcrumbComponent } from './componentes/breadcrumb/breadcrumb.component';
@NgModule({
  declarations: [
    CustomInputDateComponent,
    ConfirmDialogComponent,
    BreadcrumbComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    NgxMaskModule.forRoot(),
    CommonModule
  ], exports: [
    CustomInputDateComponent,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    NgxMaskModule,
    CommonModule,
    BreadcrumbComponent
  ],
  providers: [
    AlertService,
    ConfirmDialogService
  ]
})
export class CoreModule { }
