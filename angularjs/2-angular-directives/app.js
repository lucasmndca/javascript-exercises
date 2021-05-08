var app = angular.module('firstAngularApp', []);

app.controller('mainCtrl', function() {
    this.currentFruit = '';
    this.buttons = {
        add: 'Add',
        delete: 'Delete'
    }
    this.fruits = [];

    this.addFruit = function () {
        var fruitObj = {
            name: this.currentFruit,
        }
        this.fruits.push(fruitObj);
    };

    this.deleteFruit = function () {
        this.fruits.splice(this.fruits.indexOf(this.currentFruit));
    };
})