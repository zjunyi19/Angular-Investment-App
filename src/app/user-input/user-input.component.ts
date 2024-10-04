import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  enterInitialInvestment = '0';
  enterAnnualInvestment = '0';
  enterExpectedReturn = '5';
  enterDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enterInitialInvestment, 
      duration: +this.enterDuration, 
      expectedReturn: +this.enterExpectedReturn, 
      annualInvestment: +this.enterAnnualInvestment});
  }
}
