//UC2
class AddressBookSystem{
    FirstName;
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

// UC3
class AddressBook {
    constructor(){
        this.contacts = [];
    }

    addContact (contact){
        this.contacts.push(contact);
    }

    // UC4
    findContactByName(FirstName, LastName) {
        return this.contacts.find(
          (contact) =>
            contact.FirstName === FirstName && contact.LastName === LastName
        );
    }
    
    editContactByName(FirstName, LastName, updatedContact) {
        const contact = this.findContactByName(FirstName,LastName);
        if(contact) {
            Object.assign(contact,updatedContact);
        }else{
            throw new Error("Contact not found: ${FirstName} ${LastName}");
        }
    }

    // UC5
    deleteContact(FirstName, LastName) {
        const index = this.contacts.findIndex(
          (contact) =>
            contact.FirstName === FirstName && contact.LastName === LastName
        );
        if (index !== -1) {
          this.contacts.splice(index, 1);
          console.log("Contact deleted successfully");
        } else {
          console.log("Contact not found");
        }
    }
}

const newContacts = new AddressBook();

const conatct1 = new AddressBookSystem(
    "Mukul",
    "Patel",
    "Andheri",
    "Mumbai",
    "Maharshtra",
    "125345",
    "91-6463254686",
    "patel@gmail.com"

);

const conatct2 = new AddressBookSystem(
    "Saurabh",
    "Kumar",
    "Sector 4 New st",
    "Chennai",
    "Tamilnadu",
    "445345",
    "91-6462254686",
    "dev@gmail.com"

);

const conatct3 = new AddressBookSystem(
    "Neha",
    "Dheer",
    "Sector 6 Old market",
    "Bhopal",
    "MadhyPradesh",
    "486345",
    "91-6452254686",
    "neha@gmail.com"

);
newContacts.addContact(conatct1);
newContacts.addContact(conatct2);
newContacts.addContact(conatct3);

console.log(newContacts.contacts);

// UC4
const existingContact = newContacts.findContactByName("Neha", "Dheer");
if(existingContact){
    const updatedContact = {
        Zip: "485345",
        PhoneNumber: "91-6452154686",
    };
    newContacts.editContactByName("Neha", "Dheer",updatedContact);
    console.log("Contact Update Successfully: ",existingContact);
}else{
    console.log("Contact not found");
}

// UC5
newContacts.deleteContact("Neha", "Dheer");
console.log(newContacts.contacts);