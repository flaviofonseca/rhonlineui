import { Component } from '@angular/core';
import { LoadingService } from './core/service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading;
  title = 'rhonlineui';

  constructor(
    private loadingService: LoadingService
  ) {
    loadingService.changeLoadingEvent
      .subscribe(event => {
        if (event) {
          setTimeout(() => this.loading = event);
        } else {
          setTimeout(() => this.loading = event, 200);
        }
      });
  }
}
