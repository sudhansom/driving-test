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

  selectedFile: any; //File | null = null;
  imageUrl: any;// string | null = null;


  constructor(private imageUploadService: ImageUploadService) {}
  reactiveForm: FormGroup = new FormGroup<any>({});

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      this.imageUrl = this.selectedFile;
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {

    console.log(typeof(this.selectedFile));

    console.log('form submitted', this.reactiveForm.value.image);

      // this.imageUploadService.uploadImage(this.selectedFile).subscribe(
      //   (response) => {
      //     // Assuming the server returns the URL of the uploaded image
      //     this.imageUrl = response.imageUrl;
      //   },
      //   (error) => {
      //     console.error('Error uploading image:', error);
      //   }
      // );
    }
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      image: new FormControl(null, this.selectedFile),
      explanation: new FormControl(null),
      question: new FormControl(null),
      answer: new FormControl(true),
    })
  }

}

