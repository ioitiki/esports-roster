import { Pipe, PipeTransform } from '@angular/core';
import { Team } from './team.model';

@Pipe({
  name: 'gameFilter'
})
export class GameFilterPipe implements PipeTransform {

  transform(teams: Team[], game: string): any {
    if (game === 'all') {
      return teams;
    } else {
      return teams.filter(team => {
        return (team.game === game);
      })
    }
  }

}
