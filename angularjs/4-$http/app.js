var app = angular.module('firstAngularApp', []);

app.controller('mainCtrl', function($http) {
    var self = this;
    this.fruits = ['apple', 'orange', 'grape', 'tigrex'];

    $http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(response) {
            self.posts = response.data;
        })
})

app.filter('makePlural', function () {
    return function makePlural(input) {
        return input + 's';
    }
});