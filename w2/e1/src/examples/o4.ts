class Student {
    ID: number;
    code: string;
    name: string;
    address: Address[];
    grades: number[];

    constructor(ID: number, code: string, name: string, address: Address[], grades: number[]) {
        this.ID = ID;
        this.code = code;
        this.name = name;
        this.address = address;
        this.grades = grades;
    }
}
class Address {
    street: string;
    city: string;
    state: string;
    zip: number;
    constructor(street: string, city: string, state: string, zip: number) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}

export   { Student, Address };