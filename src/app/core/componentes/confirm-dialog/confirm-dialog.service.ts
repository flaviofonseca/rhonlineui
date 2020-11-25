import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { Observable } from 'rxjs';

@Injectable()
export class ConfirmDialogService {

  constructor(public dialog: MatDialog) { }

  /**
   * Retorna true para SIM e false para NAO.
   * recomenda-se utilizar .pipe(filter(e => e)) para maioria 
   * dos casos que so quer saber do SIM
   * @param param0 
   */
  confirmDialog({ question, titulo }): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      minWidth: '300px',
      data: { question, titulo }
    });

    return dialogRef.afterClosed();
  }
}
