import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  //deklaracja zmiennej w ktorej przechowywany bedzie plik
  file: any

  constructor(
    private fileService:FileService
  ) { }

  ngOnInit(): void {
  }

  upload() {
      this.fileService.uploadFile(this.file).subscribe(
        res => {
          console.log(res);
        }
      );
  }

  selectFile(e: any) {
    this.file = e.target.files[0];
  }

}
