import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavComponent } from './top-nav/top-nav.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule,TopNavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
