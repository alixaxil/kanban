import { User } from './user';
import { Team } from './team';

export enum Progress {
    BACKLOG, IN_PROGRESS, TEST, BLOCKED, DONE
  }

export class Task {

    public id: number;
    private description: String;
    public progress: Progress;
    private user: User = null;
    private team: Team = null;
    
    public constructor(
      description?: String, progress?: Progress, user?: User, id?: number, team?: Team
    ) {
      this.description = description;
      this.progress = progress;
      this.user = user;
      this.team = team;
    }

    public getId(): number {
        return this.id;
    }

    public changeProgress(prog: Progress): void {
        this.progress = prog;
    }

    public toString(): string {
        return this.description + ' \n ' + this.progress;
    }

    public getProgress(): Progress {
        return this.progress;
    }
    
}

