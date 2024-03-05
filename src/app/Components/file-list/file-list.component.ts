import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileStorageService } from '../../Services/file-storage.service';
import { FileSizePipe } from '../../Pipes/file-size.pipe';
import { FileWithUrl } from '../../Interfaces/file-with-url'; // Import the FileWithUrl interface

import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-file-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, FileSizePipe],
  templateUrl: './file-list.component.html',
  styleUrl: './file-list.component.scss'
})
export class FileListComponent implements OnInit {

  // Properties for table configuration
  displayedColumns: string[] = ['thumbnail', 'name', 'type', 'size']; // Columns to display
  dataSource = new MatTableDataSource<FileWithUrl>(); // Data source for table

  // Constructor with dependency injection
  constructor(private fileStorageService: FileStorageService, private dialog: MatDialog) {}

  // ngOnInit lifecycle hook
  ngOnInit(): void {
    // Subscribe to file updates from the service
    this.fileStorageService.files$.subscribe(files => {
      // Map files to include URL for thumbnail access
      const filesWithUrls: FileWithUrl[] = files.map(file => ({
        file: file,
        url: URL.createObjectURL(file)
      }));
      // Set the data source for the table
      this.dataSource.data = filesWithUrls;
    });
  }

  // Method to open image dialog
  openDialog(imageUrl: string): void {
    // Open the ImageDialogComponent with the image URL
    this.dialog.open(ImageDialogComponent, {
      data: { imageUrl: imageUrl }, // Pass image URL as data
      maxWidth: '90vw',
      maxHeight: '90vh' 
    });
  }
}