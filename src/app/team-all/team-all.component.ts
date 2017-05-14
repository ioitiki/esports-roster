import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-team-all',
  templateUrl: './team-all.component.html',
  styleUrls: ['./team-all.component.css', './team-all.component.scss']
})
export class TeamAllComponent implements OnInit {
  teams: Team[];
  selectedGame: string = "all";
  games: string[];

  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit() {
    this.teamService.getTeams().subscribe((teams) => {
      this.teams = teams;
    });
    this.games = this.teamService.getGames();
  }

}
