
export enum Role {
    GUEST, USER, ADMIN
}

export class User {

    public id: number;
    private name: String;
    private email: String;
    private password: String;
    //public role: Role;
    public r: String;

    constructor(id?: number, name?: String, email?: String, r?:String, password?: String) {
        this.name = name || "";
        this.password = password || "";
        this.email = email || "";
        //this.role = role || Role.GUEST;
        this.r = r;
    }

    getname(): String {
        return this.name;
    }

    setname(value: String) {
        this.name = value;
    }

    getpassword(): String {
        return this.password;
    }

    setpassword(value: String) {
        this.password = value;
    }

    /*getrole(): Role {
        return this.role;
    }

    setrole(value: Role) {
        this.role = value;
    }*/
}

