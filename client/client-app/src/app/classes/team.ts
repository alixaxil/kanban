import { User } from '../classes/user';
import { Task } from './task';

export class Team {
   public id: number;
    public name: String;
    public users: User[];
    public tasks: Task[];

    constructor(name?: String) {
        this.name = name;
        this.users = new Array<User>();
        this.tasks = new  Array<Task>();
    }

    public addUsers(users: User[]) {
        this.users = users;
    }
    public addUser (user: User) {
        this.users.push(user);
    }

    public getName(): String {
        return this.name;
    }

    public addTasks(tasks:Task[]) {
        this.tasks = tasks;
    }

    public addTask(task:Task) {
        this.tasks.push(task);
    }

    public getTasksNumber() : number {
        return this.tasks.length;
    }
}
