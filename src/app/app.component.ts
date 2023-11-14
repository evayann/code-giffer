import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CodeGeneratorComponent } from './core/code-generator/code-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CodeGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  code = '<p class="test color" id="toto"> Hello <i class="icon icon-home" style="color: red"></i> </p> <div> <button> click </button> </div>';
}
