import { Component, OnInit } from '@angular/core';
import { LoderServiceService } from '../helper/loder-service.service';

@Component({
  selector: 'app-loader',
  template: ` <div class="loader-container" *ngIf="isLoading">
  <div class="loader">
    <!-- Your loading GIF or animation here -->
    <img src="assets/Ghost.gif" alt="Loading..."> 
  </div>
</div>`,
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit{
  constructor(private loaderService: LoderServiceService){}
  isLoading: boolean = false;
  ngOnInit(): void {
    this.loaderService.loading$.subscribe((loading: boolean) => {
      this.isLoading = loading;
    });
    console.log("*******");
      
  }


}
