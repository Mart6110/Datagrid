import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatTabsModule} from '@angular/material/tabs';

import { FileUploadComponent } from './Components/file-upload/file-upload.component';
import { FileListComponent } from './Components/file-list/file-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FileUploadComponent, FileListComponent, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Datagrid';
}
