import { Component, OnInit } from '@angular/core';
import { SerieService } from './serie.service';
import { serie } from './serie';

@Component({
  selector: 'app-series-list',
  templateUrl: './serie.component.html',
  //styleUrls: ['./serie.component.css']
})
export class SeriesListComponent implements OnInit {

  series: serie[] = [];

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  getAverageSeasons(): number {
    let total = 0;
    this.series.forEach(serie => total += serie.seasons);
    return total / this.series.length;
  }
}
