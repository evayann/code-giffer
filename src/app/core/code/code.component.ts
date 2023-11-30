import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WindowComponent } from './window/window.component';
import { CodeAnimation } from '../code-editor/code-animation';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [WindowComponent, NgStyle],
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent {
  protected code = '<p> test </p>';
  private nbCharacterOnOneRaw = 64;

  protected get codeWidth(): string {
    return `${this.nbCharacterOnOneRaw}ch`;
  }

  protected codeHasChange(codeEvent: { value: string, position: number }): void {
    this.code = codeEvent.value;
  }
}
