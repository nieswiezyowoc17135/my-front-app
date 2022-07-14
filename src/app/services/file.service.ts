import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { File } from '../models/file';

@Injectable({providedIn: 'root'})
export class FileService {

  private fileUrl = 'https://localhost:7249/api/File?take='

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  createFile(skip: number, take: number, word: string) : Observable<File> {
    return this.http.get<File>(this.fileUrl+take+'&skip='+skip+'&word='+word);
  }

  constructor(
    private http: HttpClient
  ) { }
}
