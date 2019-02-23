import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Competition } from './shared/competition.model';
import { Observable } from 'rxjs';
import { Team } from './shared/team.model';
import { Match } from './shared/match.model';

@Injectable({
  providedIn: 'root'
})



export class FootballDataService {
  private competitionsUrl = 'http://api.football-data.org/v2/competitions';  // URL to web api
  private competitionsMatchUrl = 'http://api.football-data.org/v2/competitions/{competitionId}/matchs';  // URL to web api
  private teamUrl = 'http://api.football-data.org/v2/team';  // URL to web api
  private matchUrl = 'http://api.football-data.org/v2/match';  // URL to web api
  private token = '';



  constructor(
    private http: HttpClient) { }


  getCompetitions (): Observable<Competition[]> {
    const url = this.competitionsUrl + '?plan=TIER_ONE';
    return this.http.get<Competition[]>(url, {
      headers: {'X-Auth-Token': this.token}
   });
  }

  getCompetitionDetails (competitionId: string): Observable<Competition> {
    const url = this.competitionsUrl + '/' + competitionId;
    return this.http.get<Competition>(url , {
      headers: {'X-Auth-Token': this.token}
   });
  }


  getTeams (): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamUrl, {
     headers: {'X-Auth-Token': this.token}
    });
  }

  getCompetitionMatchs (competitionId: string): Observable<Match[]> {
    const url = this.competitionsMatchUrl.replace('{competitionId}', competitionId);
    return this.http.get<Match[]>(url, {
     headers: {'X-Auth-Token': this.token}
  });
}
}
