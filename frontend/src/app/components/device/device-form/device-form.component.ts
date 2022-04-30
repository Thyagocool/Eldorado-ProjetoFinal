import { CategoryService } from './../../../services/category.service';
import { Category } from './../../../models/category';
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

  device: Device;
  deviceForm: FormGroup;
  btnAction: string = 'Salvar';
  categories: Category[];

  constructor(
              private deviceService:DeviceService,
              private categoryService:CategoryService,
              private snackBar: MatSnackBar,
              private matDialog: MatDialog,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public editData: Device,
  ) {}

  ngOnInit(): void {
    this.deviceForm = this.formBuilder.group({
      name : ['', Validators.required],
      color : ['', Validators.required],
      partnumber : ['', Validators.required],
      category_id : ['', Validators.required],

    })

    if(this.editData){
      this.btnAction = "Alterar";
      this.deviceForm.controls['name'].setValue(this.editData.name);
      this.deviceForm.controls['color'].setValue(this.editData.color);
      this.deviceForm.controls['partnumber'].setValue(this.editData.partnumber);
      this.deviceForm.controls['category_id'].setValue(this.editData.category_id);
    }

    this.categoryService.findAll()
    .subscribe(data => {
      this.categories = data;
    });

  }

  onSubmit(){
    console.log('device', this.deviceForm);

    if(this.deviceForm.valid){
      if(!this.editData){
        this.deviceService.create(this.deviceForm.value)
        .subscribe({
          next:(res)=>{
            this.snackBar.open("Salvo com sucesso", "X",
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
      }else{
        this.deviceService.update(this.editData.id, this.deviceForm.value)
        .subscribe({
          next:(res)=>{
            this.snackBar.open("Alterações Salvas", "X",
                {
                  duration: 2 * 1000
                })
                console.log('Salvo Alt')
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
