import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { File } from '../models/file';

@Injectable({providedIn: 'root'})
export class FileService {

  private fileUrl = 'https://localhost:7249/api/File?take='
  private fileUrlUpload = 'https://localhost:7249/api/File'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  createFile(skip: number, take: number, word: string) : Observable<any> {
    return this.http.get(this.fileUrl+take+'&skip='+skip+'&word='+word,
    {
      observe:"response",
      responseType:"blob"
    })
  }

  uploadFile(file: any){
    let formData = new FormData();
    formData.append('filePath', file);
    return this.http.post(this.fileUrlUpload, formData)
  }

  constructor(
    private http: HttpClient
  ) { }
}
