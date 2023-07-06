//UC1
class AddressBookSystem{
    FistName;
    LastName;
    Address;
    City;
    State;
    Zip;
    PhoneNumber;
    Email;

    constructor (...params){
        this.FistName = params[0];
        this.LastName = params[1];
        this.Address = params[2];
        this.City = params[3];
        this.State = params[4];
        this.Zip = params[5];
        this.PhoneNumber = params[6];
        this.Email = params[7];
    }

    toString () {
        return "FistName: "+this.FistName+"\nLastName: "+this.LastName+"\nAddress: "+this.Address+"\nCity: "+this.City+
        "\nState: "+this.State+"\nZip: "+this.Zip+"\nPhone Number: "+this.PhoneNumber+"\nEmail: "+this.Email;
    }
}

let newConatct = new AddressBookSystem(
    "Mukul",
    "Patel",
    "Andheri",
    "Mumbai",
    "Maharshtra",
    125345,
    5463254686,
    "patel@gmail.com"

);
console.log(newConatct.toString());