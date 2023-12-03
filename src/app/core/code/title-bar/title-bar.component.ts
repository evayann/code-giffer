import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  standalone: true,
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleBarComponent { }
