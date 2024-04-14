import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { ThemeService } from './shared/services/theme.service';
import { Subscription, filter } from 'rxjs';
import { MenuComponent } from './core/menu/menu.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuForm } from './core/menu/menu.model';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, MenuComponent, NavigationComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
	protected menuForm: FormGroup<any>;
	protected currentUrl?: string;
	private routeSubscription: Subscription;

	constructor(protected themeService: ThemeService, router: Router, formBuilder: FormBuilder, changeDectectorRef: ChangeDetectorRef) {
		themeService.loadDefaultTheme();
		const currentTheme = themeService.currentTheme;

		this.menuForm = formBuilder.group<MenuForm>({
			intervalBetweenFrameInMs: 100,
			theme: currentTheme.name,
			loopIteration: 0,
			hasBackground: true,
			hasPadding: true,
			isDarkMode: currentTheme.variant === 'dark',
		});

		this.routeSubscription = router.events.pipe(
			filter((event): event is NavigationEnd => event instanceof NavigationEnd)
		).subscribe((event) => {
			this.currentUrl = event.url;
			changeDectectorRef.detectChanges();
		});
	}

	ngOnDestroy(): void {
		this.routeSubscription.unsubscribe();
	}

	protected onOutletComponentActivate(component: any): void {
		component.menuForm = this.menuForm;
	}

	protected onThemeChange(): void {
		this.themeService.loadTheme({
			name: this.getMenuValue('theme'),
			variant: this.getMenuValue('isDarkMode') ? 'dark' : 'light',
		});
	}

	private getMenuValue<T = unknown>(key: any): T {
		return this.menuForm.get(key)?.value;
	}
}
