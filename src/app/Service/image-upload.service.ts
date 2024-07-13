import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {


  constructor(private http: HttpClient) { }

  private uploadUrl = 'http://localhost:8080/api/s3/uploadImage';
  private baseUrl = environment.baseUrl;


  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}`+`/api/s3/uploadImage`, formData ,{ responseType: 'text'} );
  }


  getAllImages(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}`+`/api/s3/getAllFiles`);
  }

}
