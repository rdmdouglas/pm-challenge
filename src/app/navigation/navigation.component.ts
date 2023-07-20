import { Component, Input } from '@angular/core';
import { INavigation } from './navigation.model';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    @Input() items!: INavigation[];
}
