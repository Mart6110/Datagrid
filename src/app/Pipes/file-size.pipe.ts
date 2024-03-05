import { Pipe, PipeTransform } from '@angular/core';

// Define the FileSizePipe as a standalone pipe with the name 'fileSize'
@Pipe({
  name: 'fileSize',
  standalone: true
})
export class FileSizePipe implements PipeTransform {

  // Transform function to convert a file size in bytes to a readable format
  transform(value: number): string {

    // If the value is 0, return '0 Bytes'
    if (value == 0) return '0 Bytes';

    // Define the size units and calculate the appropriate unit for the value
    const k = 1024;  // Base for kilobyte (KB)
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];  // Array of size units
    const i = Math.floor(Math.log(value) / Math.log(k));  // Calculate appropriate unit index

    // Format the value with the appropriate unit and precision
    return parseFloat((value / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

}
