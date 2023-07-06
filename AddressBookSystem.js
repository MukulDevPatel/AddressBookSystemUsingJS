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

    constructor(FirstName, LastName, Address, City, State, Zip, PhoneNumber, Email) {
        // Validate first name
        if (!/^[A-Z]{1}[a-z]{3,}$/.test(FirstName)) {
          throw new Error('Invalid first name');
        }
        this.FirstName = FirstName;
    
        // Validate last name
        if (!/^[A-Z]{1}[a-z]{3,}$/.test(LastName)) {
          throw new Error('Invalid last name');
        }
        this.LastName = LastName;
    
        // Validate Address
        if (Address.length < 4) {
          throw new Error('Invalid Address');
        }
        this.Address = Address;
    
        // Validate City
        if (City.length < 4) {
          throw new Error('Invalid City');
        }
        this.City = City;
    
        // Validate State
        if (State.length < 4) {
          throw new Error('Invalid State');
        }
        this.State = State;
    
        // Validate Zip code
        if (!/^\d{6}$/.test(Zip)) {
          throw new Error('Invalid Zip code');
        }
        this.Zip = Zip;
    
        // Validate phone number
        if (!/^[0-9]{2}[-][6-9]{1}[0-9]{9}$/.test(PhoneNumber)) {
          throw new Error('Invalid phone number');
        }
        this.PhoneNumber = PhoneNumber;
    
        // Validate Email
        if (!/^[a-zA-Z]+[.+-]{0,1}[a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$/.test(Email)) {
          throw new Error('Invalid Email');
        }
        this.Email = Email;
    }
}

let newConatct = new AddressBookSystem(
    "Mukul",
    "Patel",
    "Andheri",
    "Mumbai",
    "Maharshtra",
    "125345",
    "91-6463254686",
    "patel@gmail.com"

);
console.log(newConatct);