import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'nav[app]',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
    @Input({ required: true }) currentUrl?: string;
    protected routeList = ['auto', 'frame-per-frame'];

    protected currentRouteIndexInList(): number {
        const currentRouteIndex = this.routeList.findIndex((route) =>
            (this.currentUrl ?? '').includes(route),
        );
        return currentRouteIndex !== -1 ? currentRouteIndex : 0;
    }
}
