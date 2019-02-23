import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../football-data.service';
import { Competition } from '../shared/competition.model';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss']
})
export class CompetitionListComponent implements OnInit {

  competitions: Competition[] = [];

  constructor(
    private footballService: FootballDataService) { }

  getCompetitions(): void {
    this.footballService.getCompetitions()
      .subscribe(competitions => this.competitions = competitions);
  }


  ngOnInit() {
    this.getCompetitions();
  }

}
