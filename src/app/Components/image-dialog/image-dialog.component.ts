import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// Component decorator with configuration
@Component({
  selector: 'app-image-dialog',
  standalone: true,
  imports: [],
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent {

  // Public property to access the injected data
  public data: { imageUrl: string };

  // Constructor to inject data from the dialog opening
  constructor(@Inject(MAT_DIALOG_DATA) data: { imageUrl: string }) {
    this.data = data;  // Assign injected data to the public property
  }
}