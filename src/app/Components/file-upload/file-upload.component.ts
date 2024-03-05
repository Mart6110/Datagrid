import { Component } from '@angular/core';
import { FileStorageService } from '../../Services/file-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

// Component decorator with configuration
@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  // Property to store the selected file
  selectedFile: File | null = null;

  // Constructor with dependency injection
  constructor(private fileStorageService: FileStorageService, private snackBar: MatSnackBar) {}

  // Method to handle file selection
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;  // Access and store the selected file
  }

  // Method to handle file upload
  uploadFile(event: Event): void {
    event.preventDefault();  // Prevent default form submission behavior

    if (!this.selectedFile) {  // Check for selected file
      this.snackBar.open('Please select a file.', 'Close', { duration: 3000 });  // Error message
      return;
    }

    // Upload process
    this.fileStorageService.addFile(this.selectedFile);  // Add file to storage service
    this.snackBar.open('File uploaded successfully.', 'Close', { duration: 3000 });  // Success message
    this.selectedFile = null;  // Clear selected file
  }
}
