import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  mediaType:any='';
  id: string = '';
  movieDetails:any ;
  imgPrefix : string = 'https://image.tmdb.org/t/p/w500/';
  genres:any='';

  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService) {
   this.id =  _ActivatedRoute.snapshot.params.id;
   _MoviesService.getMovieDetails(this.id).subscribe((response)=>{

    this.movieDetails = response;
    this.genres=response.genres;

   })}

   ngOnInit():void{}
  }


//   ngOnInit(): void {


//     this.mediaType=this._ActivatedRoute.snapshot.paramMap.get('mediaType');
//     this.id=this._ActivatedRoute.snapshot.paramMap.get('id');


//  this._MoviesService.getMovieDetails(this.id).subscribe((response)=>
//  {

//  this.movieDetails=response;
//  this.genres=response.genres;
//   })
// }
//   }
