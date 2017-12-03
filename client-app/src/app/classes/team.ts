import { User } from '../classes/user';

export class Team {
    public id: number;
    public name: String;
    public users: User[];

    constructor(name?: String) {
        //this.id = id;
        this.name = name;
    }
}
