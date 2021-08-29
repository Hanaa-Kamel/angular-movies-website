
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
//from home compoenet
  @Input() trendingMovies : any[] =[];
  imgPrefix:string='https://image.tmdb.org/t/p/w500/'


  customOptions: OwlOptions = {
    loop: true,
    margin: 8 ,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }


  constructor() {

  }



  ngOnInit(): void {
  }

}
