import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  @Output() callParent = new EventEmitter<any>();

  category: Category;
  categoryForm: FormGroup;
  btnAction: string = 'Salvar';
  constructor(
              private categoryService:CategoryService,
              private snackBar: MatSnackBar,
              private matDialog: MatDialog,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public editData: Category,
  ) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name : ['', Validators.required]
    })

    if(this.editData){
      this.btnAction = "Alterar";
      this.categoryForm.controls['name'].setValue(this.editData.name);
    }

  }

  onSubmit(){

    if(this.categoryForm.valid){
      if(!this.editData){
        this.categoryService.create(this.categoryForm.value)
        .subscribe({
          next:(res)=>{
            this.snackBar.open("Salvo com sucesso", "X",
                {
                  duration: 2 * 1000
                })
                this.matDialog.closeAll();
          },
          error:(err)=>{
            this.snackBar.open("Falha ao salvar a categoria"+ err, "X",
            {
              duration: 2 * 1000
            })
          }
        })
      }else{
        this.categoryService.update(this.editData.id, this.categoryForm.value)
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
