import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { ThemeService } from './shared/services/theme.service';
import { Subscription, filter } from 'rxjs';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, NavigationComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
	protected currentUrl?: string;
	private routeSubscription: Subscription;

	constructor(themeService: ThemeService, router: Router) {
		themeService.loadDefaultTheme();
		this.routeSubscription = router.events.pipe(
			filter((event): event is NavigationEnd => event instanceof NavigationEnd)
		).subscribe((event) => this.currentUrl = event.url);
	}

	ngOnDestroy(): void {
		this.routeSubscription.unsubscribe();
	}
}
