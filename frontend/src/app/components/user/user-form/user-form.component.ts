import { User } from './../../../models/user';
import { UserService } from './../../../services/user.service';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Output() callParent = new EventEmitter<any>();

  user: User;
  userForm: FormGroup;
  btnAction: string = 'Salvar';
  constructor(
              private userService:UserService,
              private snackBar: MatSnackBar,
              private matDialog: MatDialog,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public editData: User,
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      login : ['', Validators.required],
      password : ['', Validators.required]
    })

    if(this.editData){
      this.btnAction = "Alterar";
      this.userForm.controls['login'].setValue(this.editData.login);
      this.userForm.controls['password'].setValue(this.editData.password);
    }

  }

  onSubmit(){

    if(this.userForm.valid){
      if(!this.editData){
        this.userService.create(this.userForm.value)
        .subscribe({
          next:(res)=>{
            this.snackBar.open("Salvo com sucesso", "X",
                {
                  duration: 2 * 1000
                })
                this.matDialog.closeAll();
          },
          error:(err)=>{
            this.snackBar.open("Falha ao salvar um Usuário"+ err, "X",
            {
              duration: 2 * 1000
            })
          }
        })
      }else{
        this.userService.update(this.editData.id, this.userForm.value)
        .subscribe({
          next:(res)=>{
            this.snackBar.open("Alterações Salvas", "X",
                {
                  duration: 2 * 1000
                })
                this.matDialog.closeAll();
          },
          error:(err)=>{
            this.snackBar.open("Falha ao salvar o dispositivo"+ err, "X",
            {
              duration: 2 * 1000
            })
          }
        })
      }

    }else{
      this.snackBar.open("Preencha todos os campos obrigatorios", "X",
          {
            duration: 2 * 1000
          })
    }

  }

}
