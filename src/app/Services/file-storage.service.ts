import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileStorageService {
  private fileSubject = new BehaviorSubject<File[]>([]);
  files$ = this.fileSubject.asObservable();

  constructor() { }

    addFile(file: File): void {
      const files = this.fileSubject.getValue();
      files.push(file);
      this.fileSubject.next(files);
    }

    clearFiles(): void {
      this.fileSubject.next([]);
    }
}
