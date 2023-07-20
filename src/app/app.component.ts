import { Component, OnInit } from '@angular/core';
import { INavigation } from './navigation/navigation.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    items!: INavigation[];

    ngOnInit(): void {
        this.items = [
            { name: '1', description: 'Sales Pipeline Settings', selected: true },
            { name: '2', description: 'Opportunity Details Settings' },
        ]
    }

    onNext(): void {
        console.log('next');
    }
}
