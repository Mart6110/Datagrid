import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileStorageService } from '../../Services/file-storage.service';
import { FileSizePipe } from '../../Pipes/file-size.pipe';
import { FileWithUrl } from '../../Interfaces/file-with-url';

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
  displayedColumns: string[] = ['thumbnail', 'name', 'type', 'size'];
  dataSource = new MatTableDataSource<FileWithUrl>();

  constructor(private fileStorageService: FileStorageService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fileStorageService.files$.subscribe(files => {
      const filesWithUrls: FileWithUrl[] = files.map(file => ({
        file: file,
        url: URL.createObjectURL(file)
      }));
      this.dataSource.data = filesWithUrls;
    });
  }

  openDialog(imageUrl: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: {
        imageUrl: imageUrl
      },
      maxWidth: '90vw',
      maxHeight: '90vh'
    });
  }
}
