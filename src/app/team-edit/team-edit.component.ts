import { Component, OnInit, EventEmitter, AfterContentInit } from '@angular/core';
import { Team } from '../team.model';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { TeamService } from '../team.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MaterializeAction } from 'angular2-materialize';


@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {
  teamForm: FormGroup;
  games: string[];
  teamId: string;
  team: Team;

  deleteModal = new EventEmitter<string|MaterializeAction>();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private teamService: TeamService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((urlParameters) => {
      this.teamId = urlParameters['id'];
      this.getTeam();
    })
  }

  ngAfterContentInit() {
    this.getTeam();
  }

  getTeam() {
    this.teamService.getTeamById(this.teamId).subscribe((team) => {
      this.team = team;
      this.teamForm = this.fb.group({
        name: ['', Validators.required],
        game: ['', Validators.required],
        players: this.fb.array([]),
        description: ['', Validators.required],
        image_src: ['', Validators.required]
      })
      this.games = this.teamService.getGames();
      this.setForm();
    })
  }

  setForm() {
    this.teamForm.reset({
      name: this.team.name,
      game: this.team.game,
      description: this.team.description,
      image_src: this.team.image_src
    })
    if (this.team.players) {
      const playerFGs = this.team.players.map(player => this.fb.group(player));
      const playerFormArray = this.fb.array(playerFGs);
      this.teamForm.setControl('players', playerFormArray);
    }
  }

  get players(): FormArray {
    return this.teamForm.get('players') as FormArray;
  }

  addPlayer() {
    this.players.push(this.fb.group({
      name: [''],
      age: [''],
      description: [''],
      image_src: ['']}));
  }

  removePlayer(index: number) {
    this.players.removeAt(index);
  }

  updateTeam() {
    var updateTeam: Team = Object.assign({}, this.teamForm.value);
    this.teamService.updateTeam(this.teamId, updateTeam);
  }

  deleteTeam() {
    this.teamService.deleteTeam(this.teamId);
  }

  openDeleteModal() {
    this.deleteModal.emit({action:'modal',params:['open']});
  }
}
