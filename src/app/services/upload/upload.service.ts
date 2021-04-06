import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private afStorage: AngularFireStorage) { }

  upload(filePath:any){
    return this.afStorage.upload('/images'+Math.random()+filePath, filePath);
  }

}
