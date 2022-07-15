import { Component, OnInit } from '@angular/core';
import { File } from 'src/app/models/file';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-create',
  templateUrl: './file-create.component.html',
  styleUrls: ['./file-create.component.css']
})
export class FileCreateComponent implements OnInit {

  fileData: File = {skip: 0, take: 0, word:''};

  constructor(private fileService:FileService) { }

  ngOnInit(): void {
  }

  generateFile(): void {
    this.fileService.createFile(this.fileData.skip, this.fileData.take, this.fileData.word).subscribe(
      response => {
        let fileName = response.headers.get('content-disposition')
        ?.split(';')[1].split('=')[1];
        let blob:Blob = response.body as Blob;
        let a = document.createElement('a');
        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        a.click();
      }
    );
  }

}
