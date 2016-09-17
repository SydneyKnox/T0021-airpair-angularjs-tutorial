'use strict';


angular.module('tutorialWebApp.signup', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signup', {
    templateUrl: 'partials/signup/signup.html',
    controller: 'SignUpCtrl'
  });
}])

.controller('SignUpCtrl', ['$scope', '$firebaseAuth', function ($scope, $firebaseAuth) {
    console.log("SignUp Controller reporting for duty.");
    var config = {
            apiKey: "AIzaSyDYyKejWwPDBG3WuU32DA7Fyj71qWVJMbA",
            authDomain: "nonprofit-91165.firebaseapp.com",
            databaseURL: "https://nonprofit-91165.firebaseio.com",
            storageBucket: "nonprofit-91165.appspot.com",
            messagingSenderId: "869188628673"
    };
    firebase.initializeApp(config);    

    $scope.signUp = function(){
        var txtEmail = $scope.user.email;
        var txtPassword = $scope.user.password;
  
        if(!$scope.regForm.$invalid){
            console.log("Valid form Submission");
            firebase.auth().createUserWithEmailAndPassword(txtEmail, txtPassword).catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("Error: " + errorMessage);
            });
        }
        else{
            console.log("Invalid form submission");
        }
        
        $scope.user.email = '';
        $scope.user.password = '';
    };
}]);

