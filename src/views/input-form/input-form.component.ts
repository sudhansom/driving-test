import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageUploadService } from 'src/app/services/image-upload.service';



@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFormComponent {

  selectedFile: File | null = null;
  imageUrl: string | null = null;


  constructor(private imageUploadService: ImageUploadService) {}

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      this.imageUploadService.uploadImage(this.selectedFile).subscribe(
        (response) => {
          // Assuming the server returns the URL of the uploaded image
          this.imageUrl = response.imageUrl;
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }


}

