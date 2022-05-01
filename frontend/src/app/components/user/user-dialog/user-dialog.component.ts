import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

  removeItem(){
    this.userService.delete(this.data.id).subscribe(
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
