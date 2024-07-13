import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from '../Service/image-upload.service';
import { LoderServiceService } from '../helper/loder-service.service';


@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {
  constructor(private imageUploadService:ImageUploadService, private loaderService: LoderServiceService ){}

ngOnInit(): void {
  
}

imageUrl: string | ArrayBuffer | null = null;
selectedFile: File | null = null;
imageUrls: string[] = [];
flag:boolean=false;
// isLoading: boolean=false;


onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    this.selectedFile = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageUrl = reader.result;  
      };
    reader.readAsDataURL(this.selectedFile);
  }
}

removeImage(): void {
  this.imageUrl = null;
  this.selectedFile = null;
}

uploadImage(): void {
  if (this.selectedFile) {
   this.imageUploadService.uploadImage(this.selectedFile).subscribe(response =>{
    if(response){
      console.log('Image uploaded successfully', response);
      this.imageUrl = response;
      window.alert("Image Uploaded Successfully");
      this.imageUrl = null;
      this.selectedFile = null;
    }
    else{
      console.log("Failed");
    }

   } );



  }
}

fetchAllImages(): void {
  this.flag=true;
  const reader = new FileReader();
  this.imageUrls=[];

  this.imageUploadService.getAllImages().subscribe(
    (images: string[]) => {
      if(images){
        console.log('Fetched images:', images);
        this.imageUrls = images;
       
      }
      else{
        console.log("Failed");
      }
     
    });
    
  
}
back(){
  this.flag=false;
  this.imageUrls=[];
}
}
