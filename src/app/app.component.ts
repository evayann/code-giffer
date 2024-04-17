import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Observable, Subscription, filter } from 'rxjs';
import { FooterComponent } from './core/footer/footer.component';
import { InitialLoadingComponent } from './core/initial-loading/initial-loading.component';
import { MenuComponent } from './core/menu/menu.component';
import { MenuForm, MenuFormGroup } from './core/menu/menu.model';
import { NavigationComponent } from './core/navigation/navigation.component';
import { LoadingStateService } from './shared/services/loading-state.service';
import { ThemeService } from './shared/services/theme.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        MenuComponent,
        NavigationComponent,
        FooterComponent,
        InitialLoadingComponent,
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy {
    protected isLoading$: Observable<boolean>;
    protected menuForm: MenuFormGroup;
    protected currentUrl?: string;
    private routeSubscription: Subscription;

    constructor(
        protected themeService: ThemeService,
        loadingStateService: LoadingStateService,
        router: Router,
        formBuilder: FormBuilder,
        changeDectectorRef: ChangeDetectorRef,
    ) {
        this.isLoading$ = loadingStateService.isLoading$;
        themeService.loadDefaultTheme();
        const currentTheme = themeService.currentTheme;

        this.menuForm = formBuilder.group<MenuForm>({
            intervalBetweenFrameInMs: 100,
            theme: currentTheme.name,
            loopIteration: 0,
            hasBackground: true,
            roundCorner: 'medium',
            padding: 'medium',
            isDarkMode: currentTheme.variant === 'dark',
        });

        this.routeSubscription = router.events
            .pipe(
                filter(
                    (event): event is NavigationEnd =>
                        event instanceof NavigationEnd,
                ),
            )
            .subscribe((event) => {
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
