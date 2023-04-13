import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  formBudget!: FormGroup;

  constructor(private _fb: FormBuilder){

    this.initForm();
  }

  private initForm() : void{
    this.formBudget = this._fb.group({
      operation: ['+',[Validators.required]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      value: ['',[Validators.required, Validators.min(0)]],


    });
  }

  send(){
    console.log("llego al formulario");
  }

}
