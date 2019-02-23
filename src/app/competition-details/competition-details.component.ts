import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../football-data.service';
import { Competition } from '../shared/competition.model';
import { ActivatedRoute } from '@angular/router';
import { StandingList } from '../shared/standings-list.model';


@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.scss']
})
export class CompetitionDetailsComponent implements OnInit {

  competition: Competition;
  standing: StandingList;
  private competitionId: any;
  private sub: any;


  constructor(
    private footballService: FootballDataService,
    private route: ActivatedRoute) { }

  getCompetition(competitionId): void {
    this.footballService.getCompetitionDetails(competitionId)
      .subscribe(competition => this.competition = competition);
  }

  getCompetitionStanding(competitionId): void {
    this.footballService.getCompetitionStanding(competitionId)
      .subscribe(standing => this.standing = standing);
  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.competitionId = +params['id']; // (+) converts string 'id' to a number
      this.getCompetition(this.competitionId);
      this.getCompetitionStanding(this.competitionId);

      // In a real app: dispatch action to load the details here.
   });
  }

}
