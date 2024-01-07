import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CodeToGifComponent } from './pages/code-to-gif/code-to-gif-page.component';
import { FooterComponent } from './core/footer/footer.component';
import { ThemeService } from './shared/services/theme.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, CodeToGifComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(themeService: ThemeService) {
		themeService.loadDefaultTheme();
	}
}
