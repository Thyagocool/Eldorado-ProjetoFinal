import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device-dialog',
  templateUrl: './device-dialog.component.html',
  styleUrls: ['./device-dialog.component.scss']
})
export class DeviceDialogComponent implements OnInit {


  constructor(
    private deviceService: DeviceService,
    private snackBar: MatSnackBar,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

  removeItem(){
    this.deviceService.delete(this.data.id).subscribe(
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
