class Vehicle {
	constructor(model, brand, price) {
    	this.model = model;
        this.brand = brand;
        this.price = this.formatPrice(price);
    }
    
    formatPrice(price) {     
        return `R$ ${price},00`;
    }
}

class Car extends Vehicle {
	constructor(model, brand, price, power) {
    	super(model, brand, price);
    	this.power = power;
        this.type = "Carro";
    }
}

class Bike extends Vehicle {
	constructor(model, brand, price, power) {
    	super(model, brand, price);
    	this.power = power;
        this.type = "Moto";
    }
}

class Other extends Vehicle {
	constructor(model, brand, price, power) {
    	super();
    	this.power = power;
        this.type = "Outro";
    }
}

function vehicleFactory(model, brand, price, power, type) {
	switch(type) {
    	case 'car':
        	return new Car(model, brand, price, power);
        case 'bike':
        	return new Bike(model, brand, price, power);
        case 'other':
        	return new Other(model, brand, price, power);
        default:
        	break;
    }
}

function registerVehicle() {
	let inputFields = document.getElementsByClassName('form-control');
    let vehicleToBeAdded = vehicleFactory(
    	inputFields[0].value,
        inputFields[1].value,
        inputFields[2].value,
        inputFields[3].value,
        inputFields[4].options[inputFields[4].selectedIndex].value
    );
    addVehicle(vehicleToBeAdded);
}

function addVehicle(vehicleToBeAdded) {
	let listOfVehicles = [];
    listOfVehicles.push(vehicleToBeAdded);
    printVehicleList(listOfVehicles);
}

function printVehicleList(listOfVehicles) {
	let tbody = document.getElementById('root');
    for(i = 0; i < listOfVehicles.length; i++) {
    	tbody.innerHTML += `<tr><td>${listOfVehicles[i].model}</td><td>${listOfVehicles[i].brand}</td><td>${listOfVehicles[i].price}</td><td>${listOfVehicles[i].power} cv</td><td>${listOfVehicles[i].type}</td></tr>`
    }
}