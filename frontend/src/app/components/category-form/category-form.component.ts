import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Category } from './../../models/category';
import { CategoryService } from './../../services/category.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  @Output() callParent = new EventEmitter<any>();

  category: Category

  constructor(private categoryService:CategoryService, private snackBar: MatSnackBar, private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit(data){

    this.categoryService.create(data).subscribe(
      success => console.log('sucesso'),
      error => console.error(error),
      () => {
        this.snackBar.open("Salvo com sucesso", "Dispensar",
        {
          duration: 2 * 1000
        })
        console.log('request finalizado')
        this.matDialog.closeAll();
      }
    )
  }
}
