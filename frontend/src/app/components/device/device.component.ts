import { DeviceDialogComponent } from './device-dialog/device-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from 'src/app/models/device';

import { DeviceService } from './../../services/device.service';
import { DeviceFormComponent } from './device-form/device-form.component';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  dataSource: MatTableDataSource<Device>;

  displayedColumns = ['id', 'name', 'color', 'partnumber', 'category_name', 'actions']

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private deviceService: DeviceService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll(){
    this.deviceService.findAll()
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openFormDialog() {
    const dialogRef = this.dialog.open(DeviceFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.findAll();
    });
  }

  openFormDialogEdit(device: Device){
    const dialogRef = this.dialog.open(DeviceFormComponent,{
      data: device
    });
    dialogRef.afterClosed().subscribe(result => {
      this.findAll();
    });
  }

  openFormDialogDelete(id: number){
    const dialogRef = this.dialog.open(DeviceDialogComponent,{
      data: {id: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.findAll();
    });
  }

}
