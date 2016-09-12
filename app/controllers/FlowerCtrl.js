'use strict';

app.controller('FlowerCtrl', function($scope, FlowerFactory){

  FlowerFactory.getFlowers()
  .then((flowerData)=>{
    console.log("flowerData", flowerData);
    $scope.flowers = flowerData;
  });

});