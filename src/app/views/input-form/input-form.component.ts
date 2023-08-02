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
  currentId: string = '';
  options: {
    answer: boolean,
    question: string,
    detail?: string
  }[] = []


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
      this.addInOptions();
      const newObject = {
        image: this.imageUrl,
        explanation: this.reactiveForm.value.explanation,
        options: this.options
      }
      this.imageUploadService.uploadForm(newObject).subscribe(
        (response) => {
          this.currentId = response.name;
          this.imageUrl = null;
          this.reactiveForm.reset();
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      image: new FormControl(this.imageUrl),
      explanation: new FormControl(null),
      question: new FormControl(null),
      answer: new FormControl(true),
      detail: new FormControl(null),
    })
  }

  addInOptions(){
    this.options.push({
      question: this.reactiveForm.value.question,
      answer: this.reactiveForm.value.answer,
      detail: this.reactiveForm.value.detail
    });
    // this.reactiveForm.value.question.reset();
    // this.reactiveForm.value.answer.reset();
    // this.reactiveForm.value.detail.reset();
  }

}

