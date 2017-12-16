import { User, Role } from './classes/user';

export const ROLES: String[] = [
    "ADMIN",
    "USER",
    "GUEST"
];

export const USERS: User[] = [
    new User(1,'Lajos', 'bla@bla.hu', Role.ADMIN, ""),
    new User(2, 'Anett', 'asd@asd.hu',Role.GUEST, ""),
    new User(3, 'Zsolt', 'jjjd@jjj.hu',Role.GUEST, ""),
    new User(4, 'Zsanett', 'tttt@zuzuz.hu',Role.USER, ""),
    new User(5, 'Edit', 'rtr@rtr.hu',Role.GUEST, ""),
    new User(7, 'Bela', 'uzud@asd.hu',Role.USER, ""),    
];