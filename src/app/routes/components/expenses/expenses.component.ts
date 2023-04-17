import { Component, Input, OnInit, inject } from '@angular/core';
import { Concept } from 'src/app/core/models/concept';
import { BudgetService } from 'src/app/core/services/budget.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  @Input() totalIncome: number = 0;

  listExpenses: Concept[]=[];
  private _budgetService = inject(BudgetService);

  ngOnInit(): void {
      this.listExpenses = this._budgetService.listExpenses;
  }
  
  delete(index:number){
    this.listExpenses.splice(index,1);

  }

  calculatePercentage(expense: Concept){
    return expense.value/this.totalIncome;
  }

}


 