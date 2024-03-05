import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Injectable decorator
@Injectable({
  providedIn: 'root' // Makes this service available throughout the application
})
export class FileStorageService {

  // Private behavior subject to store files as an observable array
  private fileSubject = new BehaviorSubject<File[]>([]);

  // Public observable to access the stored files
  files$ = this.fileSubject.asObservable();

  constructor() { }

  // Method to add a new file
  addFile(file: File): void {
    // Get current file list
    const files = this.fileSubject.getValue();

    // Add the new file to the list
    files.push(file);

    // Emit the updated list through the subject
    this.fileSubject.next(files);
  }

  // Method to clear all stored files
  clearFiles(): void {
    // Emit an empty array to clear the subject
    this.fileSubject.next([]);
  }
}
