import { Component, OnInit } from '@angular/core';
import { INavigationStep } from './navigation/navigation.model';

enum NavigationStepName {
  STEP_1 = '1',
  STEP_2 = '2',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  NavigationStepName = NavigationStepName;
  steps!: INavigationStep[];
  currentStep!: INavigationStep;
  done: boolean = false;

  ngOnInit(): void {
    this.steps = [
      { name: NavigationStepName.STEP_1, description: 'Sales Pipeline Settings', selected: true },
      { name: NavigationStepName.STEP_2, description: 'Opportunity Details Settings' },
    ];
    this.currentStep = this.steps[0];
  }

  onNext(): void {
    if (this.done) return;

    this.currentStep.selected = false;
    const next = this.getNextNavigation();

    this.currentStep = this.steps[next];
    this.currentStep.selected = true;

    this.done = next === (this.steps.length - 1);
  }

  private getNextNavigation(): number {
    const currIndex = this.steps.findIndex(x => x.name === this.currentStep.name);
    const nextIndex = currIndex + 1;
    return (this.steps.length - 1) >= nextIndex ? nextIndex : currIndex;
  }
}
