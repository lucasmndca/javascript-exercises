var app = angular.module('firstAngularApp', []);

app.controller('mainCtrl',
    class Test {

        constructor() {
            this.currentFruit = '';
            this.buttons = {
                add: 'Add',
                delete: 'Delete'
            }
            this.fruits = [];
        }

        addFruit() {
            var fruitObj = {
                name: this.currentFruit,
            }
            this.fruits.push(fruitObj);
        };

        deleteFruit() {
            this.fruits.splice(this.fruits.indexOf(this.currentFruit));
        };
    }

)