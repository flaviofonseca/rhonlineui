import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent implements OnInit {

  @Input() opcoes;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirecionar(item): void {
    this.router.navigate([item.rota]);
  }

}
