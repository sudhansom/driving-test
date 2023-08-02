import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageUploadService } from 'src/app/services/image-upload.service';



@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFormComponent implements OnInit {
  reactiveForm: FormGroup = new FormGroup<any>({});

  selectedFile: File | null = null;
  imageUrl: File | null = null;


  constructor(private imageUploadService: ImageUploadService) {}

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      this.reactiveForm.value.image = this.imageUrl;
      this.imageUploadService.uploadForm(this.reactiveForm.value).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
      this.reactiveForm.reset();
    }
  }

  fetchData(){
    this.imageUploadService.getFormData().subscribe(form => {
      for(const key in form){
        if(form[key]){
          console.log(form[key].image);
          this.imageUrl = form[key].image;
        }
      }
    })
  }

  ngOnInit(): void {
    this.fetchData();
    this.reactiveForm = new FormGroup({
      image: new FormControl(this.imageUrl),
      explanation: new FormControl(null),
      question: new FormControl(null),
      answer: new FormControl(true),
    })
  }

}

