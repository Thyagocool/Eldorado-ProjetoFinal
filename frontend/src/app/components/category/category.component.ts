import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/category';

import { CategoryService } from './../../services/category.service';
import { CategoryFormComponent } from './../category-form/category-form.component';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  // categories: Observable<Category>;
  categories: MatTableDataSource<Category>

  displayedColumns = ['id', 'name', 'actions']

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private categoryService:CategoryService, private dialog: MatDialog) { }

  ngOnInit(): void {
    // this.categories = this.categoryService.findAll();
    this.categoryService.findAll()
    .subscribe({
      next:(res)=>{
        this.categories = new MatTableDataSource(res);
        this.categories.paginator = this.paginator;
      },
      error:(err)=>{
        console.error('Não pode econtrar os dados')
      }
    });
  }


  openDialog() {
    const dialogRef = this.dialog.open(CategoryFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
