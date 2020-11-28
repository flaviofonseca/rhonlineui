import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../core/service/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  form;
  constructor(
    builder: FormBuilder,
    private router: Router,
    private loadingService: LoadingService
  ) {
    this.form = builder.group({
      username: ['admin'], senha: ['123456']
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    const { username, senha } = this.form.getRawValue();
    if (username === 'admin' && senha === '123456') {
      this.loadingService.addLoading();
      setTimeout(() => {
        this.router.navigate(['/view']);
        this.loadingService.removerLoading();
      }, 2000);
    }

  }
}
