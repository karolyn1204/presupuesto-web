import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Concept } from 'src/app/core/models/concept';
import { BudgetService } from 'src/app/core/services/budget.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  formBudget!: FormGroup;
  redBorder: boolean = false;
  concept!: Concept;
  result: boolean = false;

  operations=[
    {
      abbreviation:'ing',
      sign: '+',
    },
    {
      abbreviation:'egr',
      sign: '-',
    },
  ];

  constructor(private _fb: FormBuilder, private _budgetSvc: BudgetService) {
    
    this.initForm();
  }

  private initForm() : void{
    this.formBudget = this._fb.group({
      operation: ['ing',[Validators.required]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      value: ['',[Validators.required, Validators.min(0)]],
    });

    this.formBudget.get('operation')?.valueChanges.subscribe((value)=>{
      return (this.redBorder = value !== 'ing');

    });
  }

  send(){

    if (this.formBudget.invalid) return;
    this.concept= this.formBudget.value;
    const operation = this.concept.operation;

    // Send Form - operador ternario
    operation ==='ing'
      ? this._budgetSvc.listIncome.push(this.concept)
      : this._budgetSvc.listExpenses.push(this.concept);

    // Reset Form
    this.formBudget.reset();

    //seleccionar el + en el formulario
    this.formBudget.patchValue({operation: 'ing'})

    // this.result =operation ==='ing';
    // console.log('', this.result);
  }

}
