class AddressBook{
    firstName;
    lastName;
    address;
    city;
    state;
    pin;
    phone;
    mailId;

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.pin = params[5];
        this.phone = params[6];
        this.mailId = params[7];

    }
    get getFirstName(){return this.firstName;}
    set setFirstName(firstName){this.firstName = firstName;}

    get getLastName(){return this.lastName;}
    set lastName(lastName){this.lastName = lastName;}

    get getAddress(){return this.address;}
    set address(address){this.address = address;}

    get getCity(){return this.city;}
    set city(city){this.city = city;}

    get getState(){return this.state;}
    set state(state){this.state = state;}

    get getPin(){return this.pin;}
    set pin(pin){this.pin = pin;}

    get getPhone(){return this.phone;}
    set phone(phone){this.phone = phone;}

    get getMailId(){return this.mailId;}
    set mailId(mailId){this.mailId = mailId;}

}
let addessArray = [];
let ab = new AddressBook();

let firstName = document.querySelector("#fName");
let lastName = document.querySelector("#lName");
let address = document.querySelector("#addr");
let city = document.querySelector("#cty");
let state = document.querySelector("#state");
let pin = document.querySelector("#pn");
let phone = document.querySelector("#phn");
let mailId = document.querySelector("#mail");
let error_fName = document.querySelector(".error-fName");
let error_lName = document.querySelector(".error-lName");


firstName.addEventListener('input',function () {
    let firstNameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(firstNameRegex.test(firstName.value))
        error_fName.textContent = "";
    else
        error_fName.textContent = "Incorrect First Name";

});

lastName.addEventListener('input',function () {
    let lastNameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(lastNameRegex.test(lastName.value))
        error_lName.textContent = "";
    else
        error_lName.textContent = "Incorrect Last Name";
});

function addContact(){
    let ab = new AddressBook(firstName,
        lastName,
        address,
        city,
        state,
        pin,
        phone,
        mailId);
        addressArray.push(ab);
    console.log("first Name :"+ab.getFirstName.value);
}

function displayContact(){
    let contact;
    for(let obj of addressArray){
        contact += obj.getFirstName.value +","+ obj.getLastName.value+","+ obj.getAddress.value+","+ obj.getCity.value+","+ obj.getState.value +","+ obj.getPhone.value+","+ obj.getPin.value+","+ obj.getMailId.value +"<br>" ;
    }
    document.getElementById("display").innerHTML = contact;
}