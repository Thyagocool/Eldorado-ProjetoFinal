import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  dataSource: MatTableDataSource<User>;
  displayedColumns = ['id', 'login', 'actions']

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService:UserService, private dialog: MatDialog, private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.findAll()
  }

  openFormDialog() {
    const dialogRef = this.dialog.open(UserFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.findAll();
    });
  }

  openFormDialogEdit(user: User){
    const dialogRef = this.dialog.open(UserFormComponent,{
      data: user
    });
    dialogRef.afterClosed().subscribe(result => {
      this.findAll();
    });
  }

  openFormDialogDelete(id: number){
    const dialogRef = this.dialog.open(UserDialogComponent,{
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
    this.userService.findAll()
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
