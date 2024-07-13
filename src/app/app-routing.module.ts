import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
  { path: '', redirectTo: '/imageUploader', pathMatch: 'full' },
  { path: 'imageUploader', component: ImageUploaderComponent },
  {path: 'loader', component: LoaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
