import { Component } from '@angular/core';
import { FileStorageService } from '../../Services/file-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  selectedFile: File | null = null;

  constructor(private fileStorageService: FileStorageService, private snackBar: MatSnackBar) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  uploadFile(event: Event): void {
    event.preventDefault();

    if (!this.selectedFile) {
      this.snackBar.open('Please select a file.', 'Close', { duration: 3000 });
      return;
    }

    this.fileStorageService.addFile(this.selectedFile);
    this.snackBar.open('File uploaded successfully.', 'Close', { duration: 3000 });
    this.selectedFile = null; // Clear the selected file
  }
}
