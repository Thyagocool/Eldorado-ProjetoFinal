import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/category';

import { CategoryService } from './../../services/category.service';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  dataSource: MatTableDataSource<Category>;

  displayedColumns = ['id', 'name', 'actions']

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private categoryService:CategoryService, private dialog: MatDialog, private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.findAll()
  }

  openFormDialog() {
    const dialogRef = this.dialog.open(CategoryFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.findAll();
    });
  }

  openFormDialogEdit(category: Category){
    const dialogRef = this.dialog.open(CategoryFormComponent,{
      data: category
    });
    dialogRef.afterClosed().subscribe(result => {
      this.findAll();
    });
  }

  openFormDialogDelete(id: number){
    const dialogRef = this.dialog.open(CategoryDialogComponent,{
      data: {id: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.findAll();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  findAll(){
    this.categoryService.findAll()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        console.error('Não pode econtrar os dados');
      }
    });
  }

}
