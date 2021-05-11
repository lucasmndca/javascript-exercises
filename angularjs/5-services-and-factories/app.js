var app = angular.module('firstAngularApp', []);

app.controller('mainCtrl', function (mainFactory) {
    var self = this;
    this.fruits = ['apple', 'orange', 'grape', 'tigrex'];

    mainFactory.getPosts().then(function (response) {
        self.posts = response.data;
    });
});

app.filter('makePlural', function () {
    return function makePlural(input) {
        return input + 's';
    }
});

/**
 *  Declares properties like a class and is consumed individually.
 *  Usually the best choice.
 */ 
app.service('mainSvc', function ($http) {
    this.getPosts = function () {
        return $http.get('https://jsonplaceholder.typicode.com/posts');
    }
});

// Declares properties as variables and return them in a single object
app.factory('mainFactory', function ($http) {
    var getPosts = function () {
        return $http.get('https://jsonplaceholder.typicode.com/posts');
    }

    return { getPosts };
});