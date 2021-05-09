const app = angular.module('firstAngularApp', []);

app.controller('mainCtrl', ['$http', class MainController {
    constructor($http) {
        this.fruits = ['apple', 'orange', 'grape', 'tigrex'];
        this.posts = [];

        this.onInit($http);
    }

    onInit($http) {
        $http.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => this.posts = response.data);
    }

    showPost(post) {
        console.log(post);
    }
}]);

app.filter('trimPostTitle', () => {
    return (input) =>  input.slice(0,24) + '...';
});

app.filter('trimPostBody', () => {
    return (input) =>  input.slice(0,128) + '...';
});