import { Injectable } from '@angular/core';

import { Concept } from '../models/concept';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  listIncome: Concept[] = [
    {
      operation: 'ing',
      description: 'Salario',
      value: 2100,
    },
    {
      operation: 'ing',
      description: 'Venta coche',
      value: 1500,
    },
  ];

  listExpenses: Concept[] = [
    {
      operation: 'egr',
      description: 'Renta Departamento',
      value: 900,
    },
    {
      operation: 'egr',
      description: 'Ropa',
      value: 435,
    },
  ];

  constructor() { 
 
  
  }
}
