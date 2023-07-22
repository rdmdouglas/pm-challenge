import { Component, OnInit } from '@angular/core';
import { INavigationStep } from './navigation/navigation.model';

enum NavigationStepNumber {
  STEP_1 = 1,
  STEP_2 = 2,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  NavigationStepNumber = NavigationStepNumber;
  steps!: INavigationStep[];
  currentStep!: INavigationStep;
  done: boolean = false;

  ngOnInit(): void {
    this.steps = [
      { number: NavigationStepNumber.STEP_1, description: 'Sales Pipeline Settings', selected: true },
      { number: NavigationStepNumber.STEP_2, description: 'Opportunity Details Settings' },
    ];
    this.currentStep = this.steps[0];
  }

  onPrevious(): void {
    this.done = false;
    this.currentStep.selected = false;

    const currentIndex = this.steps.findIndex(x => x.number === this.currentStep.number);
    this.currentStep = this.steps[currentIndex - 1];
    this.currentStep.selected = true;
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
    const currIndex = this.steps.findIndex(x => x.number === this.currentStep.number);
    const nextIndex = currIndex + 1;
    return (this.steps.length - 1) >= nextIndex ? nextIndex : currIndex;
  }
}
