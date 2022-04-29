import { Device } from './../../../models/device';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from 'src/app/services/device.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.scss']
})
export class DeviceFormComponent implements OnInit {

  @Output() callParent = new EventEmitter<any>();

  category: Device;
  deviceForm: FormGroup;
  btnAction: string = 'Salvar';

  constructor(
              private deviceService:DeviceService,
              private snackBar: MatSnackBar,
              private matDialog: MatDialog,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public editData: Device,
  ) {}

  ngOnInit(): void {
    this.deviceForm = this.formBuilder.group({
      name : ['', Validators.required]
    })

    if(this.editData){
      this.btnAction = "Alterar";
      this.deviceForm.controls['name'].setValue(this.editData.name);
    }
  }

  onSubmit(){

    if(this.deviceForm.valid){
      if(!this.editData){
        this.deviceService.create(this.deviceForm.value)
        .subscribe({
          next:(res)=>{
            this.snackBar.open("Salvo com sucesso", "Dispensar",
                {
                  duration: 2 * 1000
                })
                this.matDialog.closeAll();
          },
          error:(err)=>{
            this.snackBar.open("Falha ao salvar o dispositivo"+ err, "Dispensar",
            {
              duration: 2 * 1000
            })
          }
        })
      }else{
        //this.deviceForm.update()
      }

    }else{
      this.snackBar.open("Preencha todos os campos obrigatorios", "Dispensar",
          {
            duration: 2 * 1000
          })
    }

  }

}
