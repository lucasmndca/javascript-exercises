var app = angular.module('firstAngularApp', []);

app.controller('mainCtrl', function() {
    this.hello = 'world';

    this.fruits = ['apple', 'orange', 'grape', 'tigrex'];

    this.alertMe = function () {
        alert('Something!');
    };
})

app.filter('makePlural', function () {
    return function makePlural(input) {
        return input + 's';
    }
});