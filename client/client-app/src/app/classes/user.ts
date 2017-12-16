
export enum Role {
    GUEST, USER, ADMIN
}

export class User {

    public id: number;
    private name: String;
    private email: String;
    private password: String;
    public role: Role;

    constructor(id?: number, name?: String, email?: String, role?: Role, password?: String) {
        this.id = id;
        this.name = name || "";
        this.password = password || "";
        this.email = email || "";
        this.role = role || Role.GUEST;
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
}

