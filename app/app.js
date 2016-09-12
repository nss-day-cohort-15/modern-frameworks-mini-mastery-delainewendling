"use strict";

var app = angular.module("FlowerPower", ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/flowers/view', {
    templateUrl: 'partials/FlowerDisplay.html',
    controller: 'FlowerCtrl'
  })
  .otherwise('/');
});

//Initialize Firebase
app.run((KeyGetter)=>{
  console.log("firebase running!", KeyGetter);
  let fbConfig = KeyGetter;
  firebase.initializeApp(fbConfig);
});
