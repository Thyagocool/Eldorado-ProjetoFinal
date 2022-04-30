import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CategoryService } from './../../../services/category.service';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss']
})
export class CategoryDialogComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private snackBar: MatSnackBar,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

  removeItem(){
    this.categoryService.delete(this.data.id).subscribe(
      result => {
        this.snackBar.open("Item removido", "X",
        {
          duration: 2 * 1000
        });
        this.matDialog.closeAll();
      }
    )
  }

}
